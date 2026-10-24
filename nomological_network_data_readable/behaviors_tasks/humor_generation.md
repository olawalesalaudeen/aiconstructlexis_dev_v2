# Humor generation
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Humorous response generation  

## State of the Field

**Space of definitions.** Across the papers, humor generation is consistently treated as a text generation task in which the model produces a humorous or witty response to a prompt or question, and one definition also makes unexpectedness part of the target output. A narrower, alignment-oriented use treats it as producing outputs that incorporate humor or wit and are evaluated under a humor reward model as a secondary objective, with responses described as optimizing helpfulness while adhering to a humor threshold.

**Variants.** Named variants are limited and remain within textual response generation. Papers refer to witty response generation and humorous response generation, and one study places the task alongside broader humor-oriented work that also includes humor discrimination.

**Space of elicitation and scores.** Papers link humor generation to a single measurement instrument, User preference study, used as a user-preference evaluation to test "the creativity and humor of LLMs." A separate operationalization scores it with a humor reward model: one paper states, "we set humor as the target reward," and describes generated responses as needing to satisfy a humor threshold while optimizing helpfulness.

**What it is taken as evidence of.** Papers do not present humor generation as evidence of several constructs. The only linked construct is Humor understanding, and the recorded link is causal rather than evidential: one paper claims a causal relationship from Humor understanding to Humor generation, stating that "with these two basic skills, humor understanding and judgment, the ability to generate humor can be improved."

## Sources

**[Innovative Thinking, Infinite Humor: Humor Research of Large Language Models through Structured Thought Leaps](https://proceedings.iclr.cc/paper_files/paper/2025/file/6794f555524c9069e26970a408d353cc-Paper-Conference.pdf)**
> The observable task of producing a witty, unexpected, or humorous textual response to a given prompt or question.

**[Bounded Rationality for LLMs: Satisficing Alignment at Inference-Time](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chehade25a/chehade25a.pdf) (as "Humorous response generation")**
> Producing outputs that incorporate humor or wit, evaluated under a humor reward model as a secondary objective in alignment.

## Relationships

### Humor generation →
- **User preference study** (measurements) — *measured_by*
  > We conduct a user-preference study to test the creativity and humor of LLMs. (Section 3.3)
  - [Innovative Thinking, Infinite Humor: Humor Research of Large Language Models through Structured Thought Leaps](https://proceedings.iclr.cc/paper_files/paper/2025/file/6794f555524c9069e26970a408d353cc-Paper-Conference.pdf)

### → Humor generation
- **Humor understanding** (constructs) — *causes*
  > Finally, with these two basic skills, humor understanding and judgment, the ability to generate humor can be improved. (Section 1)
  - [Innovative Thinking, Infinite Humor: Humor Research of Large Language Models through Structured Thought Leaps](https://proceedings.iclr.cc/paper_files/paper/2025/file/6794f555524c9069e26970a408d353cc-Paper-Conference.pdf)
