# Event detection
**Type:** Behavior  
**Referenced in:** 6 papers  
**Also known as:** Event identification  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats event detection as identifying event triggers in text and assigning them predefined event types, sometimes presented as structured (event type, trigger) pairs. Most formulations make correctness depend on both parts matching the reference annotation: one paper states that an event trigger is correct only if both the trigger and event type align with gold annotations, while another separates trigger identification from trigger classification by first requiring the trigger offsets to match and then the event type to match as well.

**Variants.** A smaller line of work uses the name event identification for the stricter criterion of matching the trigger-event pair, described as correct identification of the event mention. Some papers further break the behavior into trigger identification and trigger classification, using labels such as Tri-I and Tri-C. Papers also study the task in different settings, including robustness benchmarks alongside NER and RE, and one benchmark uses the undisclosed test set of MAVEN.

**Space of elicitation and scores.** Papers link event detection to 2 measurement instruments, ACE05 and SPEED, and both are used as event detection datasets. One paper describes these instruments as covering news and epidemiology settings, respectively.

**What it is taken as evidence of.** Papers do not explicitly link event detection to any construct, so there is no reported agreement about what underlying construct it is taken to reflect.

## Sources

**[DiCoRe: Enhancing Zero-shot Event Detection via Divergent-Convergent LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1038.pdf)**
> Identifying event triggers in text and classifying them into predefined event types, producing structured outputs of (event type, trigger) pairs.

**[DiCoRe: Enhancing Zero-shot Event Detection via Divergent-Convergent LLM Reasoning](https://aclanthology.org/2025.emnlp-main.1038.pdf) (as "Event identification")**
> Correctly identifying the event mention by matching both the trigger and its event type.

## Relationships

### Event detection →
- **SPEED** (measurements) — *measured_by*
  > We benchmark SNARE on ED datasets from three domains: ACE (Doddington et al., 2004) (news), SPEED (Parekh et al., 2024c) (epidemiology), and GENIA2011 (Kim et al., 2011) (biomedical). (Section 1)
  - [SNaRe: Domain-aware Data Generation for Low-Resource Event Detection](https://aclanthology.org/2025.emnlp-main.1039.pdf)
- **ACE05** (measurements) — *measured_by*
  > We benchmark SNARE on ED datasets from three domains: ACE (Doddington et al., 2004) (news), SPEED (Parekh et al., 2024c) (epidemiology), and GENIA2011 (Kim et al., 2011) (biomedical). (Section 1)
  - [SNaRe: Domain-aware Data Generation for Low-Resource Event Detection](https://aclanthology.org/2025.emnlp-main.1039.pdf)
