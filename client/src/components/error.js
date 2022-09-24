import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function Error() {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Leaf Lore | Page not found</title>
            </Helmet>

            <div className="error-container">
                <h1>This page does not exist</h1>
                <p>The page you were looking for does not exist or has been removed.</p>

                <Button
                    onClick={() => {navigate(-1); document.documentElement.scrollTop = 0}}

                    sx={{
                            border: '2px solid #8cc63e',
                            color: '#000000',
                            marginLeft: 'auto',
                            marginRight: 'auto',

                            ':hover': {
                                bgcolor: 'rgba(140, 198, 62, 0.3)',
                                color: '#ffffff',
                            },
                        }}
                >
                Go Back
                </Button>
            </div>
        </>
    );
};