# Anthropic Red Team
**Type:** Measurement  
**Referenced in:** 2 papers  
**Also known as:** Anthropic Red-Team  

## State of the Field

An adversarial dataset of potentially harmful queries designed to test the safety of language models.

## Sources

**[Prompt Risk Control: A Rigorous Framework for Responsible Deployment of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/114292cf3f930ba157ed33f66997fee2-Paper-Conference.pdf)**
> An adversarial dataset of potentially harmful queries designed to test the safety of language models.

**[Unmasking and Improving Data Credibility: A Study with Datasets for Training Harmless Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c3837ae3d17a91b08bf5cc19280e7fd2-Paper-Conference.pdf) (as "Anthropic Red-Team")**
> A dataset of ~40k multi-round conversations between red teamers and AI assistants, scored on a 5-level scale for harmfulness, used to evaluate model safety under adversarial probing.

## Relationships

### → Anthropic Red Team
- **Harmlessness** (constructs) — *measured_by*
  > The Anthropic Red-Team (Ganguli et al., 2022) dataset contains ∼40k instances. Each instance has a multi-round conversation between humans and the AI assistant, and a 5-level score showing the harmfulness of the conversation (Section 5.1).
  - [Unmasking and Improving Data Credibility: A Study with Datasets for Training Harmless Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c3837ae3d17a91b08bf5cc19280e7fd2-Paper-Conference.pdf)
