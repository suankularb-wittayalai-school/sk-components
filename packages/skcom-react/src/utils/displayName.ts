/**
 * Safely match the `displayName` of a component.
 *
 * @param component A React component or a child from `React.Children.map`.
 * @param displayName The `displayName` to match against.
 *
 * @returns If the component exists and have the matching `displayName`.
 */
export function matchDisplayName(component: any, displayName: string): boolean {
  return (
    // Check if the component even exists
    // (When conditionally rendering a component, React returns `null` when the
    // condition fails)
    component &&
    // If the component exists, attempt to index into `displayName` and match
    // it
    (component as JSX.Element).type?.displayName === displayName
  );
}
