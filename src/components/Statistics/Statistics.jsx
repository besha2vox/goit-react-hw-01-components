import {
    Section,
    SectionTitle,
    StatsList,
    StatsItem,
    StatsText,
} from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({ title, stats }) {
    return (
        <Section data-action="id-2">
            <SectionTitle>{title}</SectionTitle>
            <StatsList>{template(stats)}</StatsList>
        </Section>
    );
}

function template(stats) {
    return stats.map(({ id, label, percentage }) => (
        <StatsItem stats={stats} id={id} key={id}>
            <StatsText>{label}</StatsText>
            <StatsText>{percentage}</StatsText>
        </StatsItem>
    ));
}

Statistics.prototype = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.object),
    // id: PropTypes.string.isRequired,
    // label: PropTypes.string.isRequired,
    // percentage: PropTypes.number.isRequired,
};
