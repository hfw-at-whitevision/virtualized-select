import './App.css'
import DocumentLookupField from './components/DocumentLookupField'
import 'react-virtualized/styles.css';

const numberOfOptions = 12 * 1000;

const options = [
  { value: 'BMW', label: 'BMW' },
  { value: 'Mercedes', label: 'Mercedes' },
  { value: 'Audi', label: 'Audi' }
]

const optionsMultipliedBy1000 = Array.from({ length: numberOfOptions }, (_, i) => ({
  value: i,
  // label: options[i % 3].label + ' - ' + i
  label: Array.from({ length: Math.floor(Math.random() * 20) + 1 }, () => Math.random().toString(36).substring(7)).join(' ')
}));

function App() {
  return (
    <>
      {/* <h1>Virtualized Select</h1> */}
      <div className="card">
        Test to implement virtualization in the Whitevision DocumentLookupField component.
      </div>
      <div>
        Number of options: {optionsMultipliedBy1000.length}
      </div>
      <section className="read-the-docs max-w-sm mx-auto mt-10">
        <DocumentLookupField
          options={optionsMultipliedBy1000}
        />
      </section>
    </>
  )
}

export default App
