# iTank Presentation

React + TypeScript proposal deck with **Framer Motion**, **Sonner**, and **Lucide** icons.

## Stack

- React 19 + TypeScript + Vite 6
- **Framer Motion** — slide transitions, cards, modal spring animations
- **Sonner** — toast notifications on slide change & popup open
- **Lucide React** — professional icons
- **Exo 2** (headings) + **General Sans** (body)

## Commands

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Content

Based on the **Ponmudi Gram Panchayat, Erode District** case study:
- 19 OHTs · ~14,000 people · proven ROI data
- Case study infographic at `public/img/case-study.png`

## Structure

```
src/
  components/   SlideDeck, WaterModal, NavBar, StatCard, Motion
  context/      Presentation state
  data/         slides.ts, popups.ts
  hooks/        keyboard, swipe, sonner toasts
  styles/       water-tech theme CSS
```
