# Kingo Field Protection App V1

## Objective
Build a mobile-first Kingo field application for technicians at `app.mykingoservice.com`.

The app turns a ServiceM8 job into a structured preventive-maintenance inspection, maps evidence-based findings to approved Kingo price-book items, checks truck inventory before presenting same-day recommendations, and records customer membership/protection status.

## Source-of-truth boundaries
- ServiceM8: customer, job, schedule, permanent job history.
- Kingo App: inspection readings, findings, recommendation rules, price book, inventory, memberships, protection eligibility, reports.
- Stripe: payment credentials and recurring membership billing. Do not store raw bank/card details in Kingo App.
- AI: explanation/report assistant only. AI must not invent diagnosis, price, stock, or protection eligibility.

## V1 user flow
1. Technician signs in.
2. App syncs today's ServiceM8 jobs.
3. Technician opens a job by ServiceM8 UUID/job number.
4. Technician completes Outdoor and Indoor inspection sections.
5. Every checkpoint supports status, measurement, photo, and note where applicable.
6. Rule engine maps supported findings to Kingo recommendations.
7. Inventory engine checks technician truck stock.
8. Same-day install is available only when required stock exists.
9. Customer sees Green / Yellow / Red findings with evidence.
10. Customer sees standard/member pricing and membership enrollment path.
11. Completed work decrements inventory and writes a concise summary back to ServiceM8.

## Summer inspection checkpoints
### Outdoor / condenser
- Condenser coil condition
- Compressor amperage
- Condenser fan motor amperage
- Run capacitor rated vs measured MFD
- Contactor and electrical connections
- Operating/refrigerant performance

### Indoor
- Indoor equipment / evaporator condition
- Blower motor amperage and wheel condition
- Condensate drain line and pan
- Primary and secondary overflow protection
- Thermostat operation
- Filter condition
- Airflow and indoor air quality

## Recommendation discipline
- Green: operating normally; no sale.
- Yellow: documented degradation/aging; approved preventive recommendation may be shown.
- Red: failed/outside approved Kingo limits; corrective action may be shown.
- Recommendations require evidence and an approved mapping rule.
- Out-of-stock items cannot be shown as same-day installs; mark as Order & Schedule.

## Inventory fields
- Product name
- Brand
- Model/SKU
- Category
- Supplier
- Location: Jesse Truck / Charlie Truck / Kingo Stock
- Quantity on hand
- Minimum stock
- Unit cost
- Standard selling price
- Member price
- Gross profit/margin
- Compatible systems/rules
- Active/inactive

## Initial inventory categories
- Capacitors
- Hard-start kits
- Contactors
- Condenser fan motors
- Blower motors
- Primary/secondary float switches
- Drain cleanout/treatment products
- UV/IAQ products
- Surge protectors
- Thermostats
- Filters/media filtration

## Membership / protection
V1 stores membership status and protection eligibility but does not yet make broad failure guarantees.
- Active / Past Due / Cancelled
- Current monthly/annual membership amount
- Effective and renewal dates
- Covered equipment
- Purchased preventive/protection items
- Component-specific benefit eligibility

## Integrations
### ServiceM8
Phase 1 is read-only: authenticate, retrieve jobs/customers/job UUIDs, and attach Kingo inspection records to those IDs.
Write-back is approval-gated until verified.

### Stripe
Use for recurring membership billing and payment status. Raw payment credentials stay with Stripe.

## V1 build order
1. Mobile shell and navigation.
2. Authentication/roles: Admin, Technician.
3. ServiceM8 read-only job sync.
4. Inspection schema and UI.
5. Price book schema.
6. Inventory schema and truck-location stock.
7. Recommendation rule engine.
8. Customer findings/recommendation screen.
9. Membership status and Stripe recurring billing.
10. ServiceM8 write-back and inventory decrement.
11. AI customer-summary layer.

## Current branch
`codex/kingo-field-app-v1`

## Current prototype route
`/field-app`

## Next implementation target
Verify ServiceM8 API credentials/capabilities and choose the production data/auth backend before adding persistent customer or payment data.
