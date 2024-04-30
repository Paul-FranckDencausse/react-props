

# React Props

React Props is a simple React component for demonstrating the usage of props in React applications.

## Features

- **Props Demo:** Showcases how props are used to pass data from parent components to child components.
- **Customizable:** Easily customize the props and their values to see the changes reflected in the components.
- **Component Interaction:** Illustrates how parent and child components interact with each other using props.
- **Clear Examples:** Provides clear and concise examples for better understanding of React props.

## Installation

To use React Props in your React project, follow these steps:

1. Install the package via npm or yarn:

   ```
   npm install @paulfranckdencausse/react-props
   ```

   or

   ```
   yarn add @paulfranckdencausse/react-props
   ```

2. Import the component into your React application:

   ```jsx
   import React from 'react';
   import { PropsDemo } from '@paulfranckdencausse/react-props';

   function App() {
     return (
       <div>
         <PropsDemo />
       </div>
     );
   }

   export default App;
   ```

3. Enjoy exploring how props work in React by interacting with the `PropsDemo` component!

## Usage

The `PropsDemo` component showcases the usage of props in React. It includes examples of:

- Passing data from parent components to child components.
- Using props to customize the behavior and appearance of components.
- Updating props and seeing the changes reflected in the rendered components.

## Example

Here's an example of how you can use the `PropsDemo` component in your project:

```jsx
import React from 'react';
import { PropsDemo } from '@paulfranckdencausse/react-props';

function App() {
  return (
    <div>
      <h1>React Props Demo</h1>
      <PropsDemo title="Hello World" count={5} />
    </div>
  );
}

export default App;
```

## Contributing

Contributions to React Props are welcome! If you find any bugs or would like to suggest new features, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.

---

Feel free to customize this README to include any additional information specific to your project.
