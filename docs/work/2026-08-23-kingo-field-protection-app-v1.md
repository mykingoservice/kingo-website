# Kingo Dispatch V1

## Objective
Build a desktop-first, phone-responsive Kingo field-service application at `dispatch.kingodigital.com`.

The interface should feel immediately familiar to an experienced ServiceM8 user: Dispatch Board, job cards, Diary, checklists, Billing, Materials & Services, inventory, reports, Account, and Settings. Kingo uses its own colors, terminology, code, and assets; no ServiceM8 logo or proprietary graphics are copied.

The first commercial purpose is to guide Jesse and Charlie through door-to-door outreach, preventive inspections, troubleshooting, evidence-based recommendations, same-day inventory checks, job totals, and daily sales tracking.

## Product boundary
Kingo Dispatch is designed to become Kingo's operating system rather than a permanent ServiceM8-dependent companion.

- Kingo Dispatch: customers, properties, equipment, jobs, inspections, readings, SOPs, recommendations, price book, inventory, sales, memberships, reports, photos, notes, and external-reference IDs.
- ServiceM8: temporary import/sync source while Kingo Dispatch is being validated; ServiceM8 UUIDs remain optional external references.
- Stripe: payment credentials and recurring membership billing. Raw bank/card details never belong in Kingo Dispatch.
- QuickBooks: accounting destination when the integration is implemented.
- AI: job-aware help, explanation, troubleshooting support, and report drafting. AI cannot invent readings, stock, prices, diagnoses, or protection eligibility.

## Interfaces
### Desktop management interface
- Dispatch Board
- Job list and job cards
- Clients, contacts, properties, and equipment
- Diary, notes, photos, forms, and checklists
- Quotes, invoices, payments, and job totals
- Materials & Services price book
- Inventory counts, purchase list, and truck/shop locations
- Door-to-door funnel and daily sales reports
- SOP manager
- Account and Settings
- Staff selector placeholder for Jesse and Charlie
- Integrations/API connection status

### Phone field interface
- Today and assigned jobs
- Jesse/Charlie selector
- Door-to-door guided interaction
- Preventive-maintenance SOP
- No-cool troubleshooting decision tree
- Job readings, photos, notes, recommendations, and approvals
- Inventory availability and quick quantity adjustment
- Billing summary, checkout, and next-job flow
- Ask Kingo AI

## Status convention
Every visible module stays in the interface even before its backend is complete.

- Green: connected/working
- Blue: working prototype
- Amber: not connected yet

This preserves the full operating-system map without pretending unfinished integrations are live.

## Core V1 field flow
1. Open Kingo Dispatch and review stock/purchase alerts.
2. Select Jesse or Charlie.
3. Open an existing job or create a door-to-door lead.
4. Record customer, property, equipment, and job information once.
5. Follow the relevant guided SOP.
6. Record objective measurements, observations, photos, and notes.
7. A verified blocking condition stops dependent testing until the customer approves correction or declines.
8. The rule engine maps a supported deficiency to an approved material/service.
9. Inventory confirms whether the work can be completed today.
10. Approved work is added to the running job total.
11. Installed items reduce inventory and increase today's sales.
12. Complete the job, record payment/collection status, and move to the next job.

## SOP 1 — Door-to-door
- Opening introduction
- Complimentary preventive inspection explanation
- Qualification questions
- Objection/help prompts
- Explicit homeowner permission
- Customer/contact capture
- Create lead/job
- Transfer directly into Preventive Maintenance SOP
- Track doors, answers, conversations, inspections, sales, memberships, and revenue

## SOP 2 — Summer preventive maintenance
### Outdoor / condenser
- Condenser coil condition
- Contactor and electrical condition
- Compressor amperage and starting condition
- Condenser fan motor amperage
- Run capacitor rated versus measured MFD
- Surge protection
- Refrigerant type and performance readings
- Low-side pressure, high-side pressure, suction-line temperature, liquid-line temperature, ambient, return DB/WB, and supply DB
- Deterministic PT, saturation-temperature, superheat, and subcooling calculations

### Indoor
- Indoor equipment and evaporator condition
- Filter and filtration configuration
- Blower motor amperage and wheel condition
- Airflow/static-pressure fields
- Drain line, cleanout, pan, and treatment
- Primary and secondary overflow protection
- Thermostat operation
- Indoor air quality and UV options

## SOP 3 — Residential no-cool troubleshooting
- Thermostat call
- Indoor blower
- Outdoor unit operation
- Contactor/control voltage
- Line/load voltage
- Capacitor/start circuit
- Compressor and condenser fan branches
- Airflow and coil condition
- Temperature performance
- Refrigeration measurements and charging method
- Finding, recommendation, customer explanation, and job completion

## Recommendation discipline
- Pass: continue; no corrective recommendation.
- Attention: documented deterioration; show only an approved preventive option supported by the finding.
- Correct before continuing: a verified condition prevents a valid dependent test.
- Action required: a measured or observed condition is outside the approved Kingo rule.
- Customer declined: record the decline and identify which downstream checks could not be completed reliably.
- Out-of-stock work is marked Order & Schedule, never same-day install.

## Inventory fields
- Product/service name
- Brand
- Model/SKU
- Category
- Supplier
- Location: Jesse Truck / Charlie Truck / Kingo Stock
- Quantity on hand
- Minimum/reorder quantity
- Verified-count status
- Unit cost, including legitimate `$0` acquisition cost
- Standard price
- Member price
- Gross profit/margin
- Compatible systems and recommendation rules
- Active/inactive
- Purchase-list status

## Initial inventory categories
- Capacitors
- Hard-start kits
- Contactors
- Transformers
- Condenser fan motors
- Blower motors and blower cleaning
- Surge protectors
- Primary/secondary float switches
- Drain cleanout and drain treatment products
- Thermostats
- Filters/media filtration
- UV/IAQ products
- Coil-cleaning services
- Refrigerant/service items

## Membership / protection
V1 keeps the fields and screens visible while legal, pricing, and coverage rules are finalized.

- Active / Past Due / Cancelled
- Monthly/annual amount
- Effective and renewal dates
- Covered equipment
- Purchased preventive/protection items
- Component-specific benefit eligibility
- Member pricing
- Annual reassessment

## Domain and routing
- Production target: `https://dispatch.kingodigital.com`
- Internal prototype route: `/field-app`
- `proxy.ts` rewrites the dispatch hostname to the internal field-app route.
- The app includes installable web-app metadata for desktop and phone use.
- DNS/custom-domain assignment remains a deployment configuration step and must not be represented as complete until verified live.

## Build order
1. Desktop ServiceM8-familiar operating shell and responsive phone shell.
2. Inventory and Materials & Services controls.
3. Door-to-door, maintenance, and troubleshooting SOP execution.
4. Persistent customer/job/equipment database.
5. Price-book/recommendation rules and daily sales ledger.
6. Photos, Diary, checklists, forms, quotes, invoices, payments, and checkout.
7. Stripe and QuickBooks integrations.
8. AI help using structured job context.
9. ServiceM8 import/sync during transition.
10. Parallel validation, backup/restore test, and eventual ServiceM8 cutover only after Kingo Dispatch proves complete enough for Kingo's actual workflow.

## Current branch
`codex/kingo-field-app-v1`

## Current prototype route
`/field-app`

## Current next target
Run the updated branch locally, verify the desktop shell and responsive phone view, then persist inventory and SOP state before connecting customer or payment data.
