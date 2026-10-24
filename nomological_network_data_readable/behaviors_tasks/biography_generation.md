# Biography generation
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Factual biography generation  

## State of the Field

**Space of definitions.** Across the surveyed work, the prevailing usage treats biography generation as producing a biographical passage, text, description, or summary about a named person from a prompt such as "Tell me a bio of <entity>." Most formulations are open-ended and focus on writing about a specific individual, sometimes described as relying on general world knowledge. A smaller line of work narrows the task to factual biography generation, defined as producing a written account of a person's life that adheres to known facts.

**Variants.** Papers study several variants and settings: long-form biography generation, paragraph-level generations, and a structured version that requires bullet point biographies. The named targets vary from a given entity or named individual to popular figures, celebrities, scientists, and famous computer scientists, and one paper describes using entities from the FactScore dataset. The main alternate label is factual biography generation.

**Space of elicitation and scores.** Papers link this behavior to two measurement instruments, most often Biography and then FActScore. Biography is used in fact verification and as a test set for biography generation, including an out-of-domain subset used for biography generation. FActScore is also used for biography.

## Sources

**[Nearest Neighbor Speculative Decoding for LLM Generation and Attribution](https://proceedings.neurips.cc/paper_files/paper/2024/file/93c099bb4cde51b724eaa6d6d4a4b5e4-Paper-Conference.pdf)**
> Generating a biographical passage about a person from a prompt.

**[Communicating Activations Between Language Model Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ramesh25a/ramesh25a.pdf) (as "Factual biography generation")**
> The task of producing a written account of a person's life that adheres to known facts.

## Relationships

### Biography generation →
- **Biography** (measurements) — *measured_by*
  > "Fact verification. We evaluate a biography-generation task (Min et al., 2023)"
  - [Nearest Neighbor Speculative Decoding for LLM Generation and Attribution](https://proceedings.neurips.cc/paper_files/paper/2024/file/93c099bb4cde51b724eaa6d6d4a4b5e4-Paper-Conference.pdf)
- **FActScore** (measurements) — *measured_by*
  > We use FACTSCORE (Min et al., 2023) for biography. (Section 4.1)
  - [Nearest Neighbor Speculative Decoding for LLM Generation and Attribution](https://proceedings.neurips.cc/paper_files/paper/2024/file/93c099bb4cde51b724eaa6d6d4a4b5e4-Paper-Conference.pdf)
