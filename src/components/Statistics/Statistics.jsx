import {
    Section,
    SectionTitle,
    StatsList,
    StatsItem,
    StatsText,
} from './Statistics.styled';
import PropTypes from 'prop-types';

function Statistics({ title, stats }) {
    return (
        <Section data-action="id-2">
            {title && <SectionTitle>{title}</SectionTitle>}
            <StatsList>
                {stats.map(({ id, label, percentage }) => (
                    <StatsItem key={id}>
                        <StatsText>{label}</StatsText>
                        <StatsText>{percentage}</StatsText>
                    </StatsItem>
                ))}
            </StatsList>
        </Section>
    );
}

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};

export { Statistics };
