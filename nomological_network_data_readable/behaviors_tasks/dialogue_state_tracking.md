# Dialogue state tracking
**Type:** Behavior  
**Referenced in:** 5 papers  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats dialogue state tracking as turn-by-turn extraction and maintenance of a user's dialogue state in task-oriented, multi-turn conversation. Most definitions describe that state as slot-value pairs or domain-slot-value triples, used to represent users' goals, constraints, requests, or other information needed to fulfill the user's goal, and one paper states that the task "predicts a set of domain-slot-value triples" while another says the output is represented as slot-value pairs.

**Variants.** Most papers keep the setting at task-oriented dialogue, but they vary in representation and framing: some foreground domain-slot-value triples, while others frame the state as slot-value pairs tied to users' goals, constraints, or requests. Related formulations also appear: one paper reports reformulating dialogue state tracking as a question-answering task for less capable models, and another paper claims a causal relationship from chain of thought to dialogue state tracking, reporting about a 10% improvement in zero-shot accuracy when CoT from an earlier step is incorporated.

**Space of elicitation and scores.** Dialogue state tracking is linked to 1 measurement instrument, SGD, which papers use as a dataset benchmark for comparative results on the task. No other measurement instrument is linked.

**What it is taken as evidence of.** The construct links are mixed rather than uniform. Papers link dialogue state tracking to 2 constructs: it is related to Dialogue understanding in work that says DST supports understanding user needs and executing appropriate system actions, and another paper uses DST to evaluate information accuracy, recorded as Faithfulness being measured by dialogue state tracking. Taken together, the papers do not converge on a single construct that this behavior indicates.

## Sources

**[From Schema to State: Zero-Shot Scheme-Only Dialogue State Tracking via Diverse Synthetic Dialogue and Step-by-Step Distillation](https://aclanthology.org/2025.emnlp-main.85.pdf)**
> The observable task of identifying and updating domain-slot-value triples across conversation turns to reflect the evolving user intent in a task-oriented dialogue.

## Relationships

### Dialogue state tracking →
- **SGD** (measurements) — *measured_by*
  > Our main results for the DST task are given Table 2, offering a comparative analysis of various language models on the MultiWOZ 2.1, 2.4 and SGD datasets.
  - [A Zero-Shot Open-Vocabulary Pipeline for Dialogue Understanding](https://aclanthology.org/2025.naacl-long.387.pdf)

### → Dialogue state tracking
- **Chain of thought** (behaviors tasks) — *causes*
  > The results in Table 4 show that incorporating the CoT from Step 1 provides an approximately 10% improvement in zero-shot accuracy by offering a more robust representation for each turn. (Section 4.6)
  - [From Schema to State: Zero-Shot Scheme-Only Dialogue State Tracking via Diverse Synthetic Dialogue and Step-by-Step Distillation](https://aclanthology.org/2025.emnlp-main.85.pdf)

### Associated with
- **Dialogue understanding** (constructs)
  > Dialogue State Tracking (DST) is crucial for understanding user needs and executing appropriate system actions in task-oriented dialogues.
  - [A Zero-Shot Open-Vocabulary Pipeline for Dialogue Understanding](https://aclanthology.org/2025.naacl-long.387.pdf)
- **Question answering** (behaviors tasks)
  > Our approach includes reformulating DST as a question-answering task for less capable models and employing self-refining prompts for more adaptable ones.
  - [A Zero-Shot Open-Vocabulary Pipeline for Dialogue Understanding](https://aclanthology.org/2025.naacl-long.387.pdf)
