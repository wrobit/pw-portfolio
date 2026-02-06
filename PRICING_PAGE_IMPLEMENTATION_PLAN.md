# Pricing Page Implementation Plan

## Goal

Implement a public website pricing section with 6 plans:

- 3 Framer plans
- 3 Code (React/Tailwind/Framer Motion) plans

Each plan must show:

- Project build price in `PLN + VAT`
- Project build price in `USD`
- Monthly maintenance price (applies when project is not handed over)

## Scope

In scope:

- Pricing page section architecture and UI
- Shared pricing data model
- Currency display logic
- Maintenance conditions and legal notes
- CTA flow for quote/contact
- Responsive behavior and accessibility

Out of scope:

- Payment processing
- Invoice generation
- CRM implementation details (only hook points)

## Pricing Data to Publish

Use these values as initial source of truth.

### Framer Plans

1. Framer Start

- Build: `4,000 PLN + VAT = 4,920 PLN` (`~1,376 USD`)
- Managed mode: `500 PLN + VAT / month = 615 PLN / month` (`~172 USD / month`)

2. Framer Growth

- Build: `9,000 PLN + VAT = 11,070 PLN` (`~3,097 USD`)
- Managed mode: `900 PLN + VAT / month = 1,107 PLN / month` (`~310 USD / month`)

3. Framer Scale

- Build: `18,000 PLN + VAT = 22,140 PLN` (`~6,193 USD`)
- Managed mode: `2,000 PLN + VAT / month = 2,460 PLN / month` (`~688 USD / month`)

### Code Plans

4. Code Start

- Build: `7,000 PLN + VAT = 8,610 PLN` (`~2,408 USD`)
- Managed mode: `800 PLN + VAT / month = 984 PLN / month` (`~275 USD / month`)

5. Code Business

- Build: `16,000 PLN + VAT = 19,680 PLN` (`~5,505 USD`)
- Managed mode: `1,600 PLN + VAT / month = 1,968 PLN / month` (`~551 USD / month`)

6. Code Pro

- Build: `32,000 PLN + VAT = 39,360 PLN` (`~11,010 USD`)
- Managed mode: `3,200 PLN + VAT / month = 3,936 PLN / month` (`~1,101 USD / month`)

## UX and Content Structure

### 1) Page Layout

- Header block (title, short positioning copy)
- Pricing controls row (optional currency display toggle)
- Two grouped sections:
  - Framer plans (3 cards)
  - Code plans (3 cards)
- Add-ons / exclusions section
- FAQ block
- Final CTA block (book call / request quote)

### 2) Plan Card Anatomy

Each card should include:

- Plan name and target profile
- Build price row:
  - Net PLN
  - Gross PLN (PLN + VAT)
  - USD equivalent
- Maintenance row:
  - Label: `Managed mode (if no handover)`
  - Net PLN/month
  - Gross PLN/month
  - USD/month
- Feature list
- CTA button (`Get this plan`)

### 3) Required Notes Under Pricing

- VAT note: `All PLN prices are net unless marked as PLN + VAT (gross at 23%).`
- USD note: `USD values are approximate and based on reference exchange rate.`
- Maintenance condition: `Maintenance applies when project remains under our management (no handover).`
- Exclusion note: `Third-party subscriptions/tools are billed separately (e.g., Framer plan/add-ons, email/CRM tools).`

## Technical Implementation

### 1) Data Model

Create a typed pricing configuration object (single source of truth), for example:

- `category`: `framer | code`
- `slug`
- `name`
- `description`
- `buildPricePlnNet`
- `maintenancePlnNetMonthly`
- `vatRate` (default `0.23`)
- `usdApproxBuild`
- `usdApproxMaintenanceMonthly`
- `features[]`
- `badge` (optional)

Keep all numeric values as numbers; format only at render time.

### 2) Formatting Rules

- PLN formatting: Polish locale, no decimal places for whole amounts
- USD formatting: `$` prefix, rounded whole or 2 decimals (pick one and apply consistently)
- Use explicit labels for `net`, `gross`, and `approx`

### 3) VAT and Derived Values

Derive gross values in code:

- `gross = net * (1 + vatRate)`

Never hardcode both net and gross if avoidable.

### 4) Componentization

- `PricingSection`
- `PricingGroup`
- `PricingCard`
- `PriceRow`
- `PricingNotes`
- `PricingFaq`

Keep card components reusable so future plan changes require data edits only.

### 5) CTA and Tracking

Each CTA should pass plan context:

- plan slug
- category
- selected route (`handover` vs `managed` if later added)

Add analytics events for:

- card viewed (optional)
- CTA click
- quote form submit

## Responsive and Accessibility Requirements

- Mobile-first card stack
- Tablet/desktop grid (3 cards per group where possible)
- Visible focus states for all controls
- Semantic headings (`h2` for section, `h3` for plan names)
- Sufficient color contrast
- Screen-reader friendly labels for price rows and notes

## SEO Requirements

- Static page metadata with pricing intent keywords
- FAQ content indexable in HTML (not hidden behind JS-only widgets)
- Include "PLN + VAT" and "USD" wording directly in visible content

## Rollout Plan

### Phase 1: Foundation

- Implement typed pricing config
- Implement VAT/gross helpers and currency formatters
- Implement base card components

### Phase 2: UI Assembly

- Render 2 pricing groups and 6 cards
- Add notes/exclusions block
- Add FAQ and CTA block

### Phase 3: QA

- Verify all amounts against source values
- Verify responsiveness (mobile/tablet/desktop)
- Verify accessibility (keyboard + screen reader checks)
- Verify analytics event payloads

### Phase 4: Launch

- Publish page
- Validate indexing and metadata
- Monitor CTA conversion and adjust copy

## QA Checklist

- [ ] Exactly 6 plans visible (3 Framer, 3 Code)
- [ ] Every plan shows build and maintenance pricing
- [ ] Every plan shows PLN + VAT and USD
- [ ] VAT math consistent across all cards
- [ ] Maintenance condition note visible
- [ ] Exclusion note visible
- [ ] CTA works for each plan
- [ ] Mobile and desktop layouts verified
- [ ] No console errors on page load

## Future Enhancements

- Currency switcher (`PLN`/`USD`) with persisted preference
- Live exchange-rate sync endpoint (with fallback cache)
- Interactive calculator for add-ons (blog, newsletter, i18n, integrations)
- Compare mode (select up to 3 plans)
