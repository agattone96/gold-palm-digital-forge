# Button Component

A versatile, accessible button component that supports multiple variants, sizes, and states for consistent user interactions throughout the Gold Palm Solutions application.

## Purpose

The Button component provides a standardized way to create interactive elements that trigger actions. It ensures consistent styling, behavior, and accessibility across the application while supporting the Gold Palm Solutions brand design system.

**When to use:**
- Triggering actions (submit forms, open modals, navigate)
- Primary and secondary call-to-actions
- Interactive elements that need button semantics

**When NOT to use:**
- For navigation links (use `<a>` tags or Link components instead)
- For non-interactive decorative elements
- When you need a toggle behavior (use Toggle component)

## Props/Parameters

| Prop Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `children` | `React.ReactNode` | ✅ | - | Button content (text, icons, etc.) |
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | ❌ | `"default"` | Visual style variant |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | ❌ | `"default"` | Button size |
| `asChild` | `boolean` | ❌ | `false` | Render as child element (using Radix Slot) |
| `disabled` | `boolean` | ❌ | `false` | Disable button interaction |
| `className` | `string` | ❌ | - | Additional CSS classes |
| `onClick` | `(event: MouseEvent) => void` | ❌ | - | Click event handler |
| `type` | `"button" \| "submit" \| "reset"` | ❌ | `"button"` | HTML button type |

### Prop Details

**variant**
- `default`: Primary gold gradient button for main actions
- `destructive`: Red button for dangerous actions (delete, remove)
- `outline`: Bordered button for secondary actions
- `secondary`: Muted button for tertiary actions
- `ghost`: Transparent button for subtle actions
- `link`: Text-only button that looks like a link

**size**
- `default`: Standard button size (h-10 px-4 py-2)
- `sm`: Smaller button (h-9 px-3)
- `lg`: Larger button (h-11 px-8)
- `icon`: Square button for icons only (h-10 w-10)

**asChild**
- When `true`, the button renders its child as the button element
- Useful for creating button-styled links or custom elements

## Usage Examples

### Basic Usage
```tsx
import { Button } from "@/components/ui/button";

<Button>Get Free Estimate</Button>
```

### Different Variants
```tsx
// Primary action
<Button variant="default">Schedule Service</Button>

// Secondary action
<Button variant="outline">Learn More</Button>

// Destructive action
<Button variant="destructive">Delete Account</Button>

// Subtle action
<Button variant="ghost">Cancel</Button>
```

### Different Sizes
```tsx
<Button size="sm">Small Button</Button>
<Button size="default">Default Button</Button>
<Button size="lg">Large Button</Button>
<Button size="icon">
  <Phone className="w-4 h-4" />
</Button>
```

### With Icons
```tsx
import { Phone, ArrowRight } from "lucide-react";

<Button>
  <Phone className="w-4 h-4 mr-2" />
  Call (727) 621-4041
</Button>

<Button variant="outline">
  Learn More
  <ArrowRight className="w-4 h-4 ml-2" />
</Button>
```

### As Link (using asChild)
```tsx
<Button asChild>
  <a href="/contact">Contact Us</a>
</Button>

// With React Router
<Button asChild>
  <Link to="/services">Our Services</Link>
</Button>
```

### Form Submission
```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit" disabled={isLoading}>
    {isLoading ? "Submitting..." : "Submit Form"}
  </Button>
</form>
```

### With Custom Styling
```tsx
<Button className="bg-gradient-primary hover:opacity-90 transition-smooth">
  Custom Styled Button
</Button>
```

## Styling & Theming

### CSS Classes Applied
- Base classes: `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium`
- Responsive classes: `ring-offset-background transition-colors`
- Focus classes: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
- Disabled classes: `disabled:pointer-events-none disabled:opacity-50`

### CSS Custom Properties Used
- `--primary`: Primary brand color (gold)
- `--primary-foreground`: Text color on primary background
- `--background`: Background color
- `--foreground`: Text color
- `--ring`: Focus ring color
- `--radius`: Border radius

### Gold Palm Solutions Brand Integration
- Default variant uses `bg-gradient-primary` for brand consistency
- Colors follow the HSL-based design system
- Supports both light and dark themes

### Customization
```tsx
// Custom gradient button
<Button className="bg-gradient-to-r from-primary to-primary-glow">
  Premium Service
</Button>

// Custom hover effects
<Button className="hover-lift shadow-elegant">
  Elevated Button
</Button>
```

## Accessibility

### ARIA Attributes
- Automatically includes `role="button"` when using `asChild` with non-button elements
- Supports `aria-disabled` when disabled
- Inherits ARIA attributes from props

### Keyboard Navigation
- ✅ **Tab**: Focus the button
- ✅ **Enter/Space**: Activate the button
- ✅ **Escape**: Remove focus (when appropriate)

### Screen Reader Support
- Button content is automatically announced
- Disabled state is communicated
- Loading states should include `aria-busy="true"`

### Focus Management
- Visible focus ring with high contrast
- Focus ring respects `prefers-reduced-motion`
- Focus is properly managed in modal contexts

### Color Contrast
- All variants meet WCAG AA contrast requirements (4.5:1)
- Primary variant: Gold on white/dark backgrounds
- Destructive variant: High contrast red
- Outline variant: Border provides sufficient contrast

### Best Practices
```tsx
// Good: Descriptive button text
<Button>Schedule Free Tree Assessment</Button>

// Bad: Generic text
<Button>Click Here</Button>

// Good: Loading state with aria-busy
<Button aria-busy={isLoading} disabled={isLoading}>
  {isLoading ? "Scheduling..." : "Schedule Service"}
</Button>

// Good: Icon with accessible text
<Button>
  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
  Call Now
</Button>
```

## Edge Cases & Error Handling

### Invalid Props
- Invalid `variant` falls back to `"default"`
- Invalid `size` falls back to `"default"`
- Non-function `onClick` is ignored

### Loading States
```tsx
const [isLoading, setIsLoading] = useState(false);

<Button 
  disabled={isLoading}
  aria-busy={isLoading}
  onClick={async () => {
    setIsLoading(true);
    try {
      await submitForm();
    } finally {
      setIsLoading(false);
    }
  }}
>
  {isLoading ? "Submitting..." : "Submit"}
</Button>
```

### Empty States
- Button with no children renders but may not be accessible
- Always provide meaningful content

### Error States
```tsx
<Button 
  variant="destructive"
  disabled={hasError}
  title={hasError ? "Please fix errors before submitting" : undefined}
>
  {hasError ? "Fix Errors" : "Submit"}
</Button>
```

### Performance Considerations
- Uses `React.forwardRef` for optimal ref forwarding
- Minimal re-renders with stable class generation
- CSS-in-JS avoided for better performance

### Browser Compatibility
- ✅ Modern browsers (Chrome 88+, Firefox 85+, Safari 14+)
- ✅ Mobile browsers
- ⚠️ IE11: Limited support (no CSS custom properties)

## Dependencies

### External Libraries
- `@radix-ui/react-slot`: For `asChild` functionality
- `class-variance-authority`: For variant-based styling
- `clsx` & `tailwind-merge`: For className merging

### Internal Dependencies
- `@/lib/utils`: For `cn()` utility function
- Tailwind CSS configuration
- Design system CSS custom properties

### Required Context
- No required context providers
- Works independently

## Testing

### Key Test Scenarios
```tsx
// Basic rendering
test('renders button with text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});

// Click handling
test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Disabled state
test('does not call onClick when disabled', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick} disabled>Click me</Button>);
  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).not.toHaveBeenCalled();
});

// Variants
test('applies correct variant classes', () => {
  render(<Button variant="outline">Outline Button</Button>);
  expect(screen.getByRole('button')).toHaveClass('border', 'border-input');
});
```

### Accessibility Testing
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Verify keyboard navigation
- Check color contrast ratios
- Test with high contrast mode

### Visual Regression Testing
- Test all variants and sizes
- Test hover and focus states
- Test disabled states
- Test with different content lengths

## Migration Notes

### From v1.0 to v2.0
- `size="xs"` removed, use `size="sm"` instead
- `loading` prop removed, use `disabled` with custom content
- `icon` prop removed, use children with icon components

### Breaking Changes
- None in current version

### Deprecation Warnings
- None in current version

## Related Components

### Similar Components
- `Toggle`: For on/off states
- `ToggleGroup`: For multiple toggle options
- `Switch`: For boolean settings

### Commonly Used Together
- `Dialog`: Buttons in modal actions
- `Form`: Submit and cancel buttons
- `Card`: Action buttons in cards
- `AlertDialog`: Confirmation buttons

### Alternative Components
- `Link`: For navigation
- `DropdownMenu`: For multiple actions
- `Menubar`: For application menus

---

## Maintenance

- **Last Updated**: January 2025
- **Component Version**: 2.1.0
- **Maintainer**: Gold Palm Solutions Development Team
- **Review Date**: April 2025
- **Dependencies Last Checked**: January 2025