import React, { useEffect, useState } from 'react';
import { BootsContainer } from 'src/components/BootsElements/BootsElements';
import { api, endpoints } from 'src/api/codewars';
import { CgMoreO } from '@react-icons/all-files/cg/CgMoreO';
import { SectionCodeWarsStyles } from './SectionCodeWars.style';

const SectionCodeWars = () => {
    const [wars, setWars] = useState([]);
    const [total, setTotal] = useState('');

    useEffect(() => {
        api.get(endpoints.codeChallenges)
            .then(({ data }) => {
                if (data.data.length > 3) {
                    data.data.length = 3;
                }
                setWars(data.data);
                setTotal(data.totalItems);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <SectionCodeWarsStyles>
            <BootsContainer className="wrapper">
                <div className="titleBar">
                    <h2>CodeWars</h2>
                    Total: <span>{total}</span>. Latest:
                </div>
                {wars.map((war) => (
                    <a
                        href={`https://www.codewars.com/kata/${war.id}`}
                        key={war.id}
                        target="blank"
                        className="codeLink"
                    >
                        {war.name.substring(0, 35)}
                    </a>
                ))}

                <a href="https://www.codewars.com/users/PK007PK" target="blank">
                    {/* <div className="iconWrapper">ss</div> */}
                    <CgMoreO className="icon" />
                </a>
            </BootsContainer>
        </SectionCodeWarsStyles>
    );
};

export default SectionCodeWars;
