function FirstComponent() {
  return <h1>My Very First Component</h1>
}

const root = ReactDOM.createRoot(
  document.getElementById("root")
)

root.render(<FirstComponent />);