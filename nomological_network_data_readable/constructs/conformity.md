# Conformity
**Type:** Construct  
**Referenced in:** 6 papers  
**Also known as:** Credulity, Bandwagon bias  

## State of the Field

**Definition agreement:** Consensus. All papers define conformity as a model or LLM tendency to move toward, align with, or prefer a perceived majority opinion. The differences are only in wording and emphasis, such as social influence during inference or compromising an initially correct belief, so they are studying the same core phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats conformity as a tendency for an LLM to align its judgment or response with a perceived majority opinion, sometimes even when it initially held a different or correct answer, and potentially at the expense of its own reasoning. Most papers use this majority-alignment framing and describe it as susceptibility to social influence during inference. Smaller variants narrow the construct to accepting group-provided answers even when they are misleading or incorrect, or to an LLM judge preferring the majority view regardless of whether it is correct.

**Space of facets.** Papers break the topic up mainly by setting and emphasis rather than by a detailed subtype scheme. One line places conformity in LLM-driven multi-agent systems and studies its existence, the factors influencing it, and mitigation strategies. Some authors also use narrower labels for specific manifestations: credulity for following the group's responses even in situations designed to create doubt, and bandwagon bias for judging settings where the majority view is preferred regardless of correctness.

**Space of measurement.** Operationalization is concentrated in one instrument: papers link conformity to one measurement instrument and no behavioral indicators. The instrument is the Asch conformity experiment, used through an emulation that analyzes group dynamics and individual responses. This operationalization follows the dominant definitions closely, because both are framed around shifts toward a majority view under group influence.

**Links.** Beyond measurement, the only linked construct is uncertainty. One paper reports that conformity is correlated with uncertainty, stating that LLMs are more likely to conform when they are more uncertain in their own prediction. No paper here claims a causal relationship or reports a separate related link for conformity.

## Sources

**[Do as We Do, Not as You Think: the Conformity of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1da9ca7e9cef4b1af63913f05d1630a4-Paper-Conference.pdf)**
> The tendency of an LLM agent to align its judgments with a majority opinion, potentially compromising its own reasoning, analogous to conformity bias in human group dynamics.

**[Do as We Do, Not as You Think: the Conformity of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1da9ca7e9cef4b1af63913f05d1630a4-Paper-Conference.pdf) (as "Credulity")**
> A tendency to accept or follow group-provided answers even when they are misleading or incorrect.

**[Justice or Prejudice? Quantifying Biases in LLM-as-a-Judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/fdca08d371e4b6c031397909e20043bd-Paper-Conference.pdf) (as "Bandwagon bias")**
> A tendency for an LLM judge to prefer the majority view regardless of whether it is correct.

## Relationships

### Conformity →
- **Asch conformity experiment** (measurements) — *measured_by*
  > Emulating the Asch conformity experiment (Asch, 1956), we analyze group dynamics and individual responses
  - [Human Simulacra: Benchmarking the Personification of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1de176cfe0d9a288bc97faa574d7197c-Paper-Conference.pdf)
- **Uncertainty** (constructs) — *correlates*
  > Notably, we are the first to show that LLMs are more likely to conform when they are more uncertain in their own prediction. (Abstract)
  - [Conformity in Large Language Models](https://aclanthology.org/2025.acl-long.195.pdf)
