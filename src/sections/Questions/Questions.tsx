import AccordionGroup from "@/components/AccordionGroup";
import Button from "@/components/Button";
import Section from "@/layouts/Section";

const Questions = () => {
    const questionItems = [
        'What is StreamVibe?',
        'How much does StreamVibe cost?',
        'What content is available on StreamVibe?',
        'How can I watch StreamVibe?',
        'How do I sign up for StreamVibe?',
        'What is the StreamVibe free trial?',
        'How do I contact StreamVibe customer support?',
        'What are the StreamVibe payment methods?',
    ];

    return (
        <Section
            title='Frequently Asked Questions'
            titleId="questions-title"
            description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
            actions={(
                <Button
                    href="/support"
                    label="Ask a Question"
                />
            )}
        >
            <AccordionGroup
                columns={2}
            >
                {questionItems}
            </AccordionGroup>
        </Section>
    )
}

export default Questions;
