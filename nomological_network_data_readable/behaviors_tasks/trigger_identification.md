# Trigger identification
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Trigger extraction  

## State of the Field

**Space of definitions.** Most definitions describe trigger identification as locating the word, phrase, or text span that marks an event occurrence. Across these formulations, success is usually framed as extracting the trigger for a detected event or finding the event-indicating item in a sentence, and one paper makes correctness explicit by counting a prediction as correct only when its offsets and type match a gold trigger. A scientific-event formulation places this within a text segment and describes the event as often represented as an agent-action-object tuple; another example treats "killed" as the trigger word in a sentence.

**Variants.** Papers use both trigger identification and trigger extraction for closely related formulations. The task appears at different granularities: extracting the trigger for each detected event, identifying a specific word or phrase in a sentence, locating a text span in a sentence or document, and selecting the most appropriate trigger word from an unlabeled sentence for a filtered event type. The settings mentioned include scientific events and target-domain unlabeled data.

**Space of elicitation and scores.** No measurement instrument is linked to it. Where scoring is described directly, one paper requires the predicted trigger's offsets and type to match a gold trigger.

**What it is taken as evidence of.** No construct is linked to it as evidence of.

## Sources

**[SciEvent: Benchmarking Multi-domain Scientific Event Extraction](https://aclanthology.org/2025.emnlp-main.871.pdf)**
> The task of detecting the key anchor of a scientific event, often represented as an agent-action-object tuple, within a given text segment.

**[SNaRe: Domain-aware Data Generation for Low-Resource Event Detection](https://aclanthology.org/2025.emnlp-main.1039.pdf) (as "Trigger extraction")**
> The task of identifying the specific word or phrase in a sentence that most distinctly indicates the occurrence of an event.
