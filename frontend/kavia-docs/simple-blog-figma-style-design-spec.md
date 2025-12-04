# Ocean Professional Design Spec (Summary)

- Primary: #2563EB
- Secondary (Accent): #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Shadows: soft layered shadows with subtle elevation
- Corners: 8–16px radii
- Typography: system sans, bold section headings, readable body

Components:
- AppBar: sticky with blur, border, brand + search + theme toggle
- Buttons: primary (filled), secondary (outline/ghost), rounded, strong focus ring
- Chip: rounded tag with subtle blue gradient
- Cards: surface, border, shadow, hover lift
- SearchBar: pill input with icon and focus halo
- Pagination: simple, clear aria-current

Layouts:
- Home: grid of post cards (2 columns desktop, 1 column mobile)
- Post Detail: single card with title, meta, tags, content

This file is a human-readable reference for developers; the implementation resides in src/theme.css and related components.
