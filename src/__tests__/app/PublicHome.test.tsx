import Page from '@/app/page';
import { render, screen } from '@testing-library/react';


describe('Home Page', () => {
    beforeEach(() => {
    })
    
    it('render home page', () => {
        render(<Page />)
        expect(screen.getByText(/RESULDATO DE HIPISMO/i)).toBeInTheDocument()
    });
    
})
