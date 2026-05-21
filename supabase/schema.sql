-- IslandVest - Maldives Private Investment Platform
-- Supabase Schema - Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================================================
-- ENUMS
-- =============================================================================

CREATE TYPE opportunity_status AS ENUM (
  'off_market',
  'pre_launch',
  'accepting_loi',
  'under_negotiation',
  'closed'
);

CREATE TYPE segment_type AS ENUM (
  'private_islands',
  'boutique_resorts',
  'overwater_villas',
  'eco_retreats',
  'liveaboards_yachts',
  'branded_residences',
  'resort_expansions',
  'mixed_use'
);

CREATE TYPE investor_type AS ENUM (
  'family_office',
  'private_equity',
  'hospitality_group',
  'sovereign_wealth',
  'uhnwi',
  'institutional',
  'developer',
  'other'
);

CREATE TYPE inquiry_status AS ENUM (
  'new',
  'contacted',
  'qualified',
  'active',
  'closed'
);

CREATE TYPE access_request_status AS ENUM (
  'pending',
  'approved',
  'rejected'
);

CREATE TYPE insight_category AS ENUM (
  'market_report',
  'investment_guide',
  'regulatory',
  'case_study',
  'opinion'
);

-- =============================================================================
-- OPPORTUNITIES TABLE
-- =============================================================================

CREATE TABLE opportunities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  segment segment_type NOT NULL,
  atoll VARCHAR(100) NOT NULL,
  
  -- Investment details
  investment_min BIGINT NOT NULL,
  investment_max BIGINT NOT NULL,
  irr_min DECIMAL(5,2),
  irr_max DECIMAL(5,2),
  equity_multiple_min DECIMAL(4,2),
  equity_multiple_max DECIMAL(4,2),
  hold_period_years INTEGER,
  
  -- Property details
  land_area_hectares DECIMAL(10,2),
  lagoon_area_hectares DECIMAL(10,2),
  num_keys INTEGER,
  
  -- Media
  hero_image TEXT NOT NULL,
  gallery_images TEXT[] DEFAULT '{}',
  
  -- Content
  headline VARCHAR(500),
  description TEXT,
  highlights TEXT[] DEFAULT '{}',
  
  -- Status
  status opportunity_status NOT NULL DEFAULT 'pre_launch',
  is_featured BOOLEAN DEFAULT FALSE,
  is_visible BOOLEAN DEFAULT TRUE,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_opportunities_status ON opportunities(status);
CREATE INDEX idx_opportunities_segment ON opportunities(segment);
CREATE INDEX idx_opportunities_featured ON opportunities(is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_opportunities_visible ON opportunities(is_visible) WHERE is_visible = TRUE;
CREATE INDEX idx_opportunities_slug ON opportunities(slug);

-- =============================================================================
-- ACCESS REQUESTS TABLE
-- =============================================================================

CREATE TABLE access_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Contact info
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  organization VARCHAR(255),
  
  -- Investor profile
  investor_type investor_type NOT NULL,
  investment_capacity VARCHAR(100) NOT NULL,
  interests TEXT[] DEFAULT '{}',
  message TEXT,
  
  -- Confirmations
  accredited_confirmed BOOLEAN DEFAULT FALSE,
  terms_accepted BOOLEAN DEFAULT FALSE,
  
  -- Status
  status access_request_status DEFAULT 'pending',
  notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_access_requests_status ON access_requests(status);
CREATE INDEX idx_access_requests_created ON access_requests(created_at DESC);

-- =============================================================================
-- OPPORTUNITY SUBMISSIONS TABLE
-- =============================================================================

CREATE TABLE opportunity_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Contact
  contact_name VARCHAR(255) NOT NULL,
  organization VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  relationship VARCHAR(100) NOT NULL,
  
  -- Property
  property_name VARCHAR(255) NOT NULL,
  segment segment_type NOT NULL,
  atoll VARCHAR(100) NOT NULL,
  land_area VARCHAR(100),
  development_stage VARCHAR(100) NOT NULL,
  asking_price VARCHAR(100),
  
  -- Details
  description TEXT NOT NULL,
  highlights TEXT,
  has_documentation BOOLEAN DEFAULT FALSE,
  
  -- Status
  status VARCHAR(50) DEFAULT 'pending',
  notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_submissions_created ON opportunity_submissions(created_at DESC);

-- =============================================================================
-- CONTACT INQUIRIES TABLE
-- =============================================================================

CREATE TABLE contact_inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  inquiry_type VARCHAR(100),
  message TEXT NOT NULL,
  status inquiry_status DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_contact_inquiries_status ON contact_inquiries(status);

-- =============================================================================
-- INSIGHTS TABLE
-- =============================================================================

CREATE TABLE insights (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(500) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  category insight_category NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(255) NOT NULL,
  read_time VARCHAR(50),
  image TEXT NOT NULL,
  is_featured BOOLEAN DEFAULT FALSE,
  is_visible BOOLEAN DEFAULT TRUE,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_insights_category ON insights(category);
CREATE INDEX idx_insights_featured ON insights(is_featured) WHERE is_featured = TRUE;
CREATE INDEX idx_insights_published ON insights(published_at DESC);

-- =============================================================================
-- NEWSLETTER SUBSCRIBERS TABLE
-- =============================================================================

CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_newsletter_active ON newsletter_subscribers(is_active) WHERE is_active = TRUE;

-- =============================================================================
-- PARTNERS TABLE
-- =============================================================================

CREATE TABLE partners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  logo_url TEXT,
  tier VARCHAR(50) DEFAULT 'standard',
  website_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_partners_order ON partners(sort_order);

-- =============================================================================
-- AUTO-UPDATE TIMESTAMPS TRIGGER
-- =============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_opportunities_updated_at
  BEFORE UPDATE ON opportunities
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_access_requests_updated_at
  BEFORE UPDATE ON access_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_submissions_updated_at
  BEFORE UPDATE ON opportunity_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_inquiries_updated_at
  BEFORE UPDATE ON contact_inquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_insights_updated_at
  BEFORE UPDATE ON insights
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_partners_updated_at
  BEFORE UPDATE ON partners
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================================================
-- ROW LEVEL SECURITY (RLS)
-- =============================================================================

ALTER TABLE opportunities ENABLE ROW LEVEL SECURITY;
ALTER TABLE access_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE opportunity_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;

-- Public read for visible content
CREATE POLICY "Public can view visible opportunities"
  ON opportunities FOR SELECT USING (is_visible = TRUE);

CREATE POLICY "Public can view visible insights"
  ON insights FOR SELECT USING (is_visible = TRUE AND published_at <= NOW());

CREATE POLICY "Public can view visible partners"
  ON partners FOR SELECT USING (is_visible = TRUE);

-- Public can submit forms
CREATE POLICY "Anyone can submit access requests"
  ON access_requests FOR INSERT TO anon WITH CHECK (TRUE);

CREATE POLICY "Anyone can submit opportunities"
  ON opportunity_submissions FOR INSERT TO anon WITH CHECK (TRUE);

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries FOR INSERT TO anon WITH CHECK (TRUE);

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT TO anon WITH CHECK (TRUE);

-- Authenticated admin access
CREATE POLICY "Admin full access to opportunities"
  ON opportunities FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

CREATE POLICY "Admin full access to access_requests"
  ON access_requests FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

CREATE POLICY "Admin full access to submissions"
  ON opportunity_submissions FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

CREATE POLICY "Admin full access to contact_inquiries"
  ON contact_inquiries FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

CREATE POLICY "Admin full access to insights"
  ON insights FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

CREATE POLICY "Admin full access to newsletter"
  ON newsletter_subscribers FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

CREATE POLICY "Admin full access to partners"
  ON partners FOR ALL TO authenticated USING (TRUE) WITH CHECK (TRUE);

-- =============================================================================
-- SEED DATA - 18 OPPORTUNITIES
-- =============================================================================

INSERT INTO opportunities (name, slug, segment, atoll, investment_min, investment_max, irr_min, irr_max, equity_multiple_min, equity_multiple_max, hold_period_years, land_area_hectares, lagoon_area_hectares, num_keys, hero_image, status, headline, is_featured) VALUES
-- Private Islands (3)
('Velaa Private Island', 'velaa-private-island', 'private_islands', 'Noonu Atoll', 85000000, 120000000, 14, 18, 2.2, 2.8, 7, 12, 45, 47, 'https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2833', 'off_market', 'Trophy asset with Four Seasons management agreement', TRUE),
('Kudadoo Maldives', 'kudadoo-maldives', 'private_islands', 'Lhaviyani Atoll', 65000000, 85000000, 12, 16, 2.0, 2.5, 6, 8, 28, 15, 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874', 'pre_launch', 'Ultra-luxury all-inclusive private island', TRUE),
('Niyama Private Islands', 'niyama-private-islands', 'private_islands', 'Dhaalu Atoll', 95000000, 130000000, 13, 17, 2.1, 2.6, 7, 15, 52, 86, 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865', 'accepting_loi', 'Twin-island resort with underwater nightclub', FALSE),

-- Boutique Resorts (3)
('Huvafen Fushi', 'huvafen-fushi', 'boutique_resorts', 'North Malé Atoll', 45000000, 60000000, 15, 20, 2.3, 2.9, 5, 6, 18, 44, 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=2787', 'pre_launch', 'Worlds first underwater spa retreat', TRUE),
('Baros Maldives', 'baros-maldives', 'boutique_resorts', 'North Malé Atoll', 38000000, 52000000, 14, 18, 2.1, 2.6, 5, 5, 15, 45, 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=2874', 'accepting_loi', 'Heritage resort with 5-star reputation', FALSE),
('Coco Privé Kuda Hithi', 'coco-prive-kuda-hithi', 'boutique_resorts', 'North Malé Atoll', 28000000, 38000000, 16, 22, 2.4, 3.0, 4, 3.5, 12, 6, 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2870', 'off_market', 'Ultra-exclusive 6-villa private island', FALSE),

-- Overwater Villas (2)
('Soneva Jani', 'soneva-jani', 'overwater_villas', 'Noonu Atoll', 75000000, 100000000, 13, 17, 2.0, 2.5, 7, 10, 35, 63, 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2873', 'pre_launch', 'Largest overwater villas in the Maldives', TRUE),
('Gili Lankanfushi', 'gili-lankanfushi', 'overwater_villas', 'North Malé Atoll', 55000000, 72000000, 14, 18, 2.2, 2.7, 6, 7, 22, 45, 'https://images.unsplash.com/photo-1510097467424-192d713fd8b2?q=80&w=2835', 'accepting_loi', 'No news no shoes philosophy', FALSE),

-- Eco Retreats (2)
('Six Senses Laamu', 'six-senses-laamu', 'eco_retreats', 'Laamu Atoll', 48000000, 65000000, 12, 16, 2.0, 2.5, 6, 8, 25, 97, 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2873', 'pre_launch', 'Award-winning sustainability pioneer', FALSE),
('Amilla Maldives', 'amilla-maldives', 'eco_retreats', 'Baa Atoll', 42000000, 58000000, 13, 17, 2.1, 2.6, 5, 6, 20, 67, 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=2827', 'accepting_loi', 'UNESCO Biosphere Reserve location', FALSE),

-- Liveaboards & Yachts (2)
('Four Seasons Explorer', 'four-seasons-explorer', 'liveaboards_yachts', 'Multiple Atolls', 15000000, 22000000, 18, 24, 2.5, 3.2, 4, NULL, NULL, 22, 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2870', 'off_market', 'Ultra-luxury expedition yacht', FALSE),
('Scubaspa Ying', 'scubaspa-ying', 'liveaboards_yachts', 'Multiple Atolls', 8000000, 12000000, 20, 26, 2.8, 3.5, 3, NULL, NULL, 36, 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2868', 'pre_launch', 'Worlds first spa liveaboard', FALSE),

-- Branded Residences (2)
('Patina Maldives Residences', 'patina-maldives-residences', 'branded_residences', 'Fari Islands', 35000000, 48000000, 10, 14, 1.8, 2.3, 8, 4, 15, 20, 'https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2870', 'accepting_loi', 'Contemporary design by Marcio Kogan', FALSE),
('The Ritz-Carlton Residences', 'ritz-carlton-residences', 'branded_residences', 'Fari Islands', 42000000, 55000000, 9, 13, 1.7, 2.2, 8, 5, 18, 25, 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2849', 'pre_launch', 'Luxury branded residence opportunity', FALSE),

-- Resort Expansions (2)
('Waldorf Astoria Expansion', 'waldorf-astoria-expansion', 'resort_expansions', 'South Malé Atoll', 25000000, 35000000, 16, 22, 2.3, 2.9, 4, 3, 10, 30, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2873', 'pre_launch', 'Phase 2 water villa expansion', FALSE),
('Conrad Maldives Extension', 'conrad-maldives-extension', 'resort_expansions', 'Ari Atoll', 30000000, 42000000, 15, 20, 2.2, 2.8, 5, 4, 12, 35, 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=2875', 'accepting_loi', 'New overwater dining and wellness', FALSE),

-- Mixed Use (2)
('Crossroads Maldives Phase 3', 'crossroads-maldives-phase-3', 'mixed_use', 'South Malé Atoll', 55000000, 75000000, 14, 18, 2.1, 2.6, 6, 12, 40, 120, 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2870', 'pre_launch', 'Integrated resort destination', FALSE),
('Malé Marina Development', 'male-marina-development', 'mixed_use', 'North Malé Atoll', 40000000, 55000000, 15, 20, 2.2, 2.8, 5, 8, 25, 80, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2870', 'accepting_loi', 'Urban waterfront mixed-use project', FALSE);

-- =============================================================================
-- SEED DATA - INSIGHTS
-- =============================================================================

INSERT INTO insights (title, slug, category, excerpt, content, author, read_time, image, is_featured, published_at) VALUES
('2024 Maldives Hospitality Investment Outlook', '2024-maldives-hospitality-outlook', 'market_report', 'Comprehensive analysis of investment trends, yield expectations, and emerging opportunities in the Maldivian luxury hospitality sector.', 'Full article content here...', 'Alexandra Chen', '12 min read', 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874', TRUE, NOW() - INTERVAL '2 days'),
('Understanding Maldives Lease Structures', 'understanding-maldives-lease-structures', 'regulatory', 'A deep dive into the legal framework governing resort leases, renewal terms, and investor protections.', 'Full article content here...', 'Ahmed Nasheed', '8 min read', 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2870', FALSE, NOW() - INTERVAL '1 week'),
('The Rise of Eco-Luxury in the Maldives', 'rise-of-eco-luxury-maldives', 'investment_guide', 'How sustainability credentials are becoming essential for premium valuations and guest appeal.', 'Full article content here...', 'Dr. Sarah Mitchell', '6 min read', 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=2787', FALSE, NOW() - INTERVAL '2 weeks'),
('Case Study: Soneva Fushi Transformation', 'case-study-soneva-fushi', 'case_study', 'How a pioneering eco-resort achieved 3.2x returns while setting new standards for sustainable luxury.', 'Full article content here...', 'Michael Torres', '10 min read', 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2873', FALSE, NOW() - INTERVAL '3 weeks'),
('Chinese Tourism Recovery: Implications for Investors', 'chinese-tourism-recovery-investors', 'market_report', 'Analysis of returning Chinese demand and its impact on RevPAR and investment timing.', 'Full article content here...', 'Li Wei', '7 min read', 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865', FALSE, NOW() - INTERVAL '1 month');

-- =============================================================================
-- SEED DATA - PARTNERS
-- =============================================================================

INSERT INTO partners (name, tier, sort_order) VALUES
('Four Seasons Hotels & Resorts', 'platinum', 1),
('Aman Resorts', 'platinum', 2),
('Soneva', 'platinum', 3),
('One&Only Resorts', 'gold', 4),
('Six Senses', 'gold', 5),
('COMO Hotels', 'gold', 6),
('Waldorf Astoria', 'silver', 7),
('The Ritz-Carlton', 'silver', 8);
