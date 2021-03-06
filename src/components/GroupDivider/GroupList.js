import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import RosterContext from '../../context/roster-context';

const GroupList = () => {
    const { groupState } = useContext(RosterContext);

    return groupState.map((group) => (
        <Card
            className="m-2 group-cards"
            style={{ width: '18rem' }}
            key={group.id}
        >
            <Card.Header>Group {group.groupNumber}</Card.Header>
            <Card.Body>
                <ul>
                    {group.members.map((member, j) => {
                        return (
                            <li key={`${group.id}-${j}`}>{member.name}</li>
                        )
                    })}
                </ul>   
            </Card.Body>
        </Card>
    ));
};

export default GroupList;