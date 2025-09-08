# Component Documentation Template

Use this template to document all reusable components in the Gold Palm Solutions project.

## Component Name

Brief one-line description of what the component does.

### Purpose

Detailed explanation of:
- What problem this component solves
- When to use this component
- When NOT to use this component
- How it fits into the overall design system

### Props/Parameters

| Prop Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| propName | `string` | ✅ | - | Description of what this prop does |
| optionalProp | `boolean` | ❌ | `false` | Description of optional prop |

#### Prop Details

**propName**
- Detailed explanation if needed
- Valid values or constraints
- Special behavior notes

### Usage Examples

#### Basic Usage
```tsx
<ComponentName propName="value" />
```

#### Advanced Usage
```tsx
<ComponentName 
  propName="value"
  optionalProp={true}
  className="custom-styles"
>
  Content here
</ComponentName>
```

#### With State/Hooks
```tsx
const [state, setState] = useState(false);

<ComponentName 
  propName="value"
  onChange={setState}
/>
```

### Styling & Theming

- CSS classes applied
- CSS custom properties used
- Tailwind utilities
- How to customize appearance
- Dark mode considerations

### Accessibility

- ARIA attributes used
- Keyboard navigation support
- Screen reader considerations
- Focus management
- Color contrast compliance
- WCAG guidelines followed

### Edge Cases & Error Handling

- What happens with invalid props
- Loading states
- Empty states
- Error states
- Performance considerations
- Browser compatibility notes

### Dependencies

- External libraries used
- Internal components used
- Required context providers

### Testing

- Key test scenarios
- Accessibility testing notes
- Visual regression testing
- Performance testing considerations

### Migration Notes

- Breaking changes from previous versions
- Deprecation warnings
- Upgrade path

### Related Components

- Similar components
- Components commonly used together
- Alternative components

---

## Maintenance

- **Last Updated**: [Date]
- **Component Version**: [Version]
- **Maintainer**: [Name/Team]
- **Review Date**: [Next review date]