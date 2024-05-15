import { render, screen } from '@testing-library/react';
import { TopHeader } from '@/app/_ui/TopHeader';
import { SessionProvider } from "next-auth/react";
import { FooterDetails } from '@/app/_ui/FooterDetails';
describe('Top Header', () => {

    it('render the Top Header', () => {
        render(<TopHeader />)
    });
    
})
