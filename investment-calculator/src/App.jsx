import { useState } from 'react';
import Header from './components/Header';
import InputElement from './components/InputElement';
import AnnualTable from './components/AnnualTable';

function App() {
    const [customerInvestments, setCustomerInvestments] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });
    const inputIsValid = customerInvestments.duration >= 1;

    const handleChange = ({ target }) => {
        const name = target.name;
        const value = target.value;

        setCustomerInvestments((prev) => ({ ...prev, [name]: +value }));
    };

    return (
        <main>
            <Header />
            <section id='user-input'>
                <div className='input-group'>
                    <InputElement
                        label='Initial Investment'
                        name='initialInvestment'
                        value={customerInvestments.initialInvestment}
                        onChange={handleChange}
                    />
                    <InputElement
                        label='Annual Investment'
                        name='annualInvestment'
                        value={customerInvestments.annualInvestment}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-group'>
                    <InputElement
                        label='Expected Return'
                        name='expectedReturn'
                        value={customerInvestments.expectedReturn}
                        onChange={handleChange}
                    />
                    <InputElement
                        label='Duration'
                        name='duration'
                        value={customerInvestments.duration}
                        onChange={handleChange}
                    />
                </div>
            </section>
            {inputIsValid ? (
                <AnnualTable userInput={customerInvestments} />
            ) : (
                <p className='center'>
                    Please enter a duration greater than zero
                </p>
            )}
        </main>
    );
}

export default App;
