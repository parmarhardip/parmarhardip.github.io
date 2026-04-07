# Design System Document: The Fluid Engineer

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Organic"**

This design system is a sophisticated departure from the rigid, grid-heavy "template" look of standard portfolios. It bridges the gap between the precision of high-end SaaS (Vercel, Linear) and the human-centric fluidity required for a Senior Engineer’s personal brand. 

Instead of boxed-in sections, we utilize **intentional asymmetry** and **tonal layering**. The goal is to create a digital space that feels "airy" yet authoritative. We achieve this by letting content breathe within expansive white space, punctuated by high-contrast typography and "liquid" yellow accents that guide the eye through the engineer's technical narrative.

---

## 2. Colors & Surface Logic

### Palette Reference (Material Convention)
*   **Surface (Background):** `#f6f6f6`
*   **Primary (Accent/Action):** `#6c5a00` (Deep gold for text on light) / `#ffd709` (Vibrant yellow for containers)
*   **On-Surface (Text):** `#2d2f2f` (High-contrast charcoal)
*   **Surface Containers:** Range from `#ffffff` (Lowest) to `#dbdddd` (Highest)

### The "No-Line" Rule
Standard 1px borders are strictly prohibited for sectioning. Structural boundaries must be defined through **background color shifts**. To separate the Hero from the Project Grid, transition from `surface` to `surface-container-low`. The absence of lines creates a boundless, premium feel.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, fine paper sheets.
*   **The Base:** `surface` (#f6f6f6).
*   **The Nested Layer:** Place a `surface-container-lowest` (#ffffff) card on top of the base.
*   **The Elevated Layer:** For modals or floating menus, use `surface-bright` with a glassmorphism effect.

### The "Glass & Gradient" Rule
To add "soul" to the SaaS aesthetic, use glassmorphism on navigation bars and floating chips.
*   **Recipe:** `surface-container-lowest` at 70% opacity + 20px Backdrop Blur.
*   **Signature Gradient:** For primary CTAs, use a subtle linear gradient from `primary_fixed` (#ffd709) to `primary_fixed_dim` (#efc900) at a 135-degree angle.

---

## 3. Typography: Editorial Authority

We use a dual-sans pairing to balance technical precision with approachable modernism.

*   **Display & Headlines (Manrope):** Chosen for its geometric soul and wide apertures.
    *   *Usage:* Use `display-lg` (3.5rem) for hero statements with tight letter-spacing (-0.02em).
*   **Body & UI (Inter):** The industry standard for readability.
    *   *Usage:* `body-lg` (1rem) for project descriptions. Ensure a line-height of 1.6 for maximum "airiness."
*   **Hierarchy Note:** High contrast is key. Pair a `display-sm` headline in `on-surface` with a `label-md` uppercase tag in `primary` to create immediate visual interest.

---

## 4. Elevation & Depth

### The Layering Principle
Forget drop shadows as a default. Depth is achieved via **Tonal Stacking**. 
*   **Example:** A code snippet block should use `surface-container-high` to look recessed into the `surface` background, rather than floating above it.

### Ambient Shadows
When a component must float (e.g., a "Hire Me" FAB), use the **Ambient Glow**:
*   **Shadow:** `0px 24px 48px rgba(45, 47, 47, 0.06)`. It should feel like a soft mist, not a dark outline. The shadow color is a 6% opacity tint of `on-surface`.

### The "Ghost Border" Fallback
If a container lacks contrast against a background, use a **Ghost Border**:
*   **Token:** `outline-variant` at 15% opacity. This provides a "suggestion" of an edge without breaking the minimalist flow.

---

## 5. Components

### Buttons: The High-Quality Interaction
*   **Primary:** Large radius (`full`), `primary_container` background, `on_primary_container` text. Use a subtle `0.5px` inner highlight on the top edge to simulate a physical button.
*   **Tertiary (Underline):** Text-only with a 4px thick `primary` (#FFD700) underline offset by 2px. The underline should animate (expand) on hover.

### Rounded Cards
*   **Radius:** `lg` (2rem).
*   **Styling:** No borders. Use `surface-container-lowest` (#ffffff) against the `#f6f6f6` background. 
*   **Content:** Forbid dividers. Use 32px of vertical padding (`spacing-xl`) to separate the card title from the body text.

### Progress Bars & Technical Traits
*   **Track:** `surface-container-highest`.
*   **Indicator:** `primary_fixed` (#ffd709) with a soft glow effect (`box-shadow: 0 0 12px #ffd709`).
*   **Shape:** `full` (pill-shaped) for a friendly, modern look.

### Organic Waves (Background Interest)
*   **Execution:** Use large, non-repeating SVG paths in `surface-container-low`.
*   **Placement:** Waves should overlap section transitions, breaking the horizontal "stripe" look of typical WordPress sites.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. A project image can bleed off the right edge of the screen while text remains centered.
*   **Do** use `primary` (Yellow) as a "highlighter." Think of it as a tool to call out key technologies or results in a sentence.
*   **Do** prioritize white space over content density. If it feels too empty, add more space.

### Don't:
*   **Don't** use black (#000000). Always use `on-surface` (#2d2f2f) for a softer, premium contrast.
*   **Don't** use 90-degree corners. Even "small" components must use at least a `sm` (0.5rem) radius.
*   **Don't** use divider lines. If two elements are blending together, increase the background tonal difference or add more padding.
*   **Don't** use generic icons. Use thin-stroke (1.5px) line icons that match the `outline` token weight.