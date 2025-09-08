# Gold Palm Solutions - Component Documentation

This directory contains comprehensive documentation for all reusable components in the Gold Palm Solutions project.

## Documentation Standards

All components should be documented using the [Component Template](./COMPONENT_TEMPLATE.md). This ensures consistency and completeness across all component documentation.

## Component Categories

### UI Components
- [Button](./components/Button.md) - Interactive button component with multiple variants
- Card - Content container component *(documentation needed)*
- Input - Form input component *(documentation needed)*
- Modal/Dialog - Overlay component *(documentation needed)*

### Form Components
- ContactForm - Contact form with validation *(documentation needed)*
- Textarea - Multi-line text input *(documentation needed)*
- Select - Dropdown selection component *(documentation needed)*

### Layout Components
- Header - Site navigation header *(documentation needed)*
- Footer - Site footer with links *(documentation needed)*
- Hero - Landing page hero section *(documentation needed)*

### Business Components
- ServiceCard - Service display component *(documentation needed)*
- TestimonialCard - Customer testimonial component *(documentation needed)*
- ContactInfoCard - Contact information display *(documentation needed)*

## Documentation Guidelines

### When to Document
- All reusable components in `/src/components/ui/`
- Complex business logic components
- Components with multiple props or variants
- Components used across multiple pages

### What to Include
1. **Purpose**: Clear explanation of what the component does
2. **Props**: Complete prop interface with types and descriptions
3. **Usage Examples**: Basic and advanced usage patterns
4. **Accessibility**: WCAG compliance and screen reader support
5. **Edge Cases**: Error handling and boundary conditions
6. **Testing**: Key test scenarios and accessibility testing

### Documentation Process
1. Create component documentation using the template
2. Include real code examples from the project
3. Test all examples to ensure they work
4. Review for accessibility compliance
5. Update when component changes

## Contributing

When adding or modifying components:

1. **Create Documentation**: Use the component template
2. **Update Examples**: Ensure all code examples are current
3. **Test Accessibility**: Verify WCAG compliance
4. **Review Dependencies**: Document all external dependencies
5. **Update This Index**: Add new components to the appropriate category

## Accessibility Standards

All components must meet:
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Reduced motion preferences

## Design System Integration

Components should follow the Gold Palm Solutions design system:
- Use HSL color system defined in `src/index.css`
- Follow spacing and typography scales
- Support light/dark theme switching
- Use consistent border radius and shadows
- Implement brand-appropriate animations

## Maintenance Schedule

- **Monthly**: Review component usage and update examples
- **Quarterly**: Accessibility audit and testing
- **Bi-annually**: Dependency updates and security review
- **Annually**: Complete documentation review and restructure

## Tools and Resources

- **Storybook**: Component playground *(to be implemented)*
- **Testing**: Jest + React Testing Library
- **Accessibility**: axe-core, WAVE, screen readers
- **Visual Testing**: Chromatic *(to be implemented)*

---

For questions about component documentation, contact the development team or create an issue in the project repository.