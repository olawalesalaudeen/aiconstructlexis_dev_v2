# Responsiveness to human feedback
**Type:** Construct  
**Referenced in:** 3 papers  
**Also known as:** Leveraging natural language feedback, Adaptation to feedback  

## State of the Field

**Definition agreement:** Consensus. All papers define this as an LLM or system's ability to adapt its responses or behavior during an ongoing interaction based on human or user feedback, such as corrections, challenges, constraints, or revised goals. The differences are only in emphasis, with most highlighting multi-turn natural language feedback and one phrasing it more generally as real-time behavioral modification during execution.

**Space of definitions.** Across papers, the prevailing usage treats this as a latent ability to adapt model responses or behavior in light of human or user feedback during interaction, often across multiple turns. Most definitions describe adaptation and improvement after natural language feedback or user corrections, while one benchmark-specific framing makes the criterion narrower by requiring both error correction and response maintenance under challenge, and by stressing that a robust model should use appropriate feedback without being misled by inappropriate feedback. A smaller variation broadens the target from text outputs to task execution, describing dynamic modification of behavior under real-time corrections, constraints, or changed goals.

**Space of facets.** The clearest internal breakdown separates error correction from response maintenance, and also contrasts appropriate with inappropriate feedback; one paper further notes a performance discrepancy between the error-correction and response-maintenance scenarios. Elsewhere, papers use closely related labels, such as leveraging natural language feedback and adaptation to feedback, for the same general ability to adjust under user feedback. No linked constructs are recorded that explicitly nest this construct under a broader one or contrast it with a different construct.

**Space of measurement.** Operationalization is narrow and benchmark-based: the construct is linked to 2 measurement instruments, FB-Bench and MINT, and to no behavioral indicators. FB-Bench is described as a fine-grained multi-task benchmark for evaluating responsiveness to human feedback under real-world usage scenarios in Chinese, with scenarios centered on error correction and response maintenance. MINT is also used to measure performance in multi-turn interaction on leveraging natural language feedback, and one description states that performance upon natural language feedback is measured by GPT-4. These operationalizations mostly match the dominant definitions by testing adaptation under feedback in interaction, though FB-Bench specifies appropriateness more tightly as both adapting when correction is warranted and maintaining correct responses under challenge.

**Links.** No papers in the recorded relationships claim causal, correlational, or related links for this construct. The available relationships only state that it is measured by FB-Bench and MINT.

## Sources

**[FB-Bench: A Fine-Grained Multi-Task Benchmark for Evaluating LLMs' Responsiveness to Human Feedback](https://aclanthology.org/2025.emnlp-main.471.pdf)**
> The latent ability of an LLM to appropriately adapt its responses based on human feedback in multi-turn interactions, whether by correcting errors or maintaining correct responses under challenge.

**[MINT: Evaluating LLMs in Multi-turn Interaction with Tools and Language Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/8a0d3ae989a382ce6e50312bc35bf7e1-Paper-Conference.pdf) (as "Leveraging natural language feedback")**
> The latent ability of an LLM to adapt and improve its outputs in response to natural language feedback from a user or simulated user across multiple interaction turns.

**[Hi Robot: Open-Ended Instruction Following with Hierarchical Vision-Language-Action Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shi25d/shi25d.pdf) (as "Adaptation to feedback")**
> The ability to dynamically modify behavior in response to real-time user corrections, constraints, or changes in task goals during execution.

## Relationships

### Responsiveness to human feedback →
- **MINT** (measurements) — *measured_by*
  > It is a benchmark for LLMs that measures their performance during multi-turn interaction, focusing on two particular capabilities (§2.1): ... (2) leveraging natural language feedback. (Section 1)
  - [MINT: Evaluating LLMs in Multi-turn Interaction with Tools and Language Feedback](https://proceedings.iclr.cc/paper_files/paper/2024/file/8a0d3ae989a382ce6e50312bc35bf7e1-Paper-Conference.pdf)
- **FB-Bench** (measurements) — *measured_by*
  > we introduce FB-Bench, a fine-grained, multi-task benchmark designed to evaluate LLMs’ responsiveness to human feedback under real-world usage scenarios in Chinese.
  - [FB-Bench: A Fine-Grained Multi-Task Benchmark for Evaluating LLMs' Responsiveness to Human Feedback](https://aclanthology.org/2025.emnlp-main.471.pdf)
