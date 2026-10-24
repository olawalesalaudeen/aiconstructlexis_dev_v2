# AUTO-J
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** AutoJ Eval  

## State of the Field

**What it is.** Most commonly, papers treat AUTO-J as an LLM-based automated judge. Definitions describe it as a 13B-parameter generative judge model that rates the helpfulness of model responses on a numeric scale and is used to evaluate model responses. A smaller usage refers to AutoJ Eval, an in-domain pairwise-comparison test set from AUTO-J with 58 prompts and 1,392 response pairs, where human annotators label outcomes as win, tie, or lose.

**What it is claimed to measure.** Papers present AUTO-J as rating response helpfulness and, in another description, as assessing the distance between a reference answer and a model’s output. No constructs are linked to it, and no behavioral indicators are linked to it.

**Space of uses.** In use, papers position AUTO-J as a judge alongside other evaluators. One paper uses both AUTO-J and GPT-4 to evaluate model responses, while another places it with LLM judges such as ARES and PROMETHEUS for comparing a reference answer with a model output. A separate usage names AutoJ Eval as an in-domain pairwise-comparison test set.

## Sources

**[Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)**
> A 13B-parameter generative judge model used as an automated evaluator to rate the helpfulness of model responses on a numeric scale.

**[SaMer: A Scenario-aware Multi-dimensional Evaluator for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/646ca7b994bc46afe33d680dbe7ed67a-Paper-Conference.pdf) (as "AutoJ Eval")**
> An in-domain pairwise-comparison test set from AUTO-J containing 58 prompts and 1,392 response pairs labeled as win, tie, or lose.

## Relationships

### → AUTO-J
- **Helpfulness** (constructs) — *measured_by*
  > To evaluate the model’s responses, we enlist the assistance of both AUTO-J (Li et al., 2023a) and GPT-4 (i.e., gpt-4-0613; OpenAI (2023a)), which provide ratings on a scale of 1 to 10. (Section 4.6)
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > Since human-labeled summaries are available, we measure the win rate of the model-generated summaries against the human ones using the Auto-J model (Li et al., 2023a). (Section 7.1)
  - [Towards Federated RLHF with Aggregated Client Preference for LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/124dde499d62b58e97e42a45b26d7369-Paper-Conference.pdf)
