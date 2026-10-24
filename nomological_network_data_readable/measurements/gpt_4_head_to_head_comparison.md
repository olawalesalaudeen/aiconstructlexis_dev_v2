# GPT-4 Head-to-head Comparison
**Type:** Measurement  
**Referenced in:** 2 papers  
**Also known as:** GPT-4 binary evaluation, Head-to-head comparison  

## State of the Field

An evaluation protocol where an evaluator, such as GPT-4, is prompted to directly compare the outputs of two different models for the same input and decide which is better.

## Sources

**[Understanding the Effects of RLHF on LLM Generalisation and Diversity](https://proceedings.iclr.cc/paper_files/paper/2024/file/5a68d05006d5b05dd9463dd9c0219db0-Paper-Conference.pdf) (as "Head-to-head comparison")**
> An evaluation protocol where an evaluator, such as GPT-4, is prompted to directly compare the outputs of two different models for the same input and decide which is better.

**[RLCD: Reinforcement Learning from Contrastive Distillation for LM Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5bd09a559a8c8e230697107b0f353d39-Paper-Conference.pdf) (as "GPT-4 binary evaluation")**
> Automated evaluation using GPT-4 to make binary judgments on which of two model outputs is better, applied across 1000 examples for each task.

## Relationships

### → GPT-4 Head-to-head Comparison
- **Harmlessness** (constructs) — *measured_by*
  > we measure both harmlessness (Harm) and helpfulness (Help) for the harmlessness task... We additionally query GPT-4 for binary judgments on 1000 examples. (Sec. 4)
  - [RLCD: Reinforcement Learning from Contrastive Distillation for LM Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5bd09a559a8c8e230697107b0f353d39-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > For the helpfulness and outlining tasks we collect just one set of labels for overall helpfulness (Help) and outline quality (Qual) respectively... We additionally query GPT-4 for binary judgments on 1000 examples. (Sec. 4)
  - [RLCD: Reinforcement Learning from Contrastive Distillation for LM Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5bd09a559a8c8e230697107b0f353d39-Paper-Conference.pdf)
