# Prompt injection
**Type:** Behavior  
**Referenced in:** 10 papers  
**Also known as:** Indirect prompt injection, Indirect prompt attack  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage describes prompt injection as a model or agent following malicious or unintended instructions inserted by an adversary into an input prompt, tool output, third-party data, or other external context. The behavior is treated as present when those embedded instructions redirect the system from the user's goal or intended behavior, for example by making it follow the attacker's goal, perform a specific task, or take unauthorized actions. Some authors use the narrower label indirect prompt injection for cases where the instructions come from external content rather than a direct prompt to the model.

**Variants.** The most recurrent variant is indirect prompt injection, also called indirect prompt attack, where malicious instructions are embedded in external content the model or agent later accesses. Papers mention emails, documents, retrieved text, tool-retrieved information, tool outputs, third-party data, and other external resources or data sources as carriers. Papers also distinguish this from direct prompt attacks, where the attacker sends inputs directly to the model.

**Space of elicitation and scores.** No measurement instrument is linked to it in the papers, so they do not specify a shared elicitation or scoring instrument for this behavior.

**What it is taken as evidence of.** The papers do not link prompt injection to any construct, so they do not state what broader construct this behavior is evidence of.

## Sources

**[AgentDojo: A Dynamic Environment to Evaluate Prompt Injection Attacks and Defenses for LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/97091a5177d8dc64b1da8bf3e1f6fb54-Paper-Datasets_and_Benchmarks_Track.pdf)**
> Introducing malicious instructions into tool outputs or other context so that the agent follows the attacker’s goal instead of the user’s.

**[Can LLMs Separate Instructions From Data? And What Do We Even Mean By That?](https://proceedings.iclr.cc/paper_files/paper/2025/file/a77eadda332b6d4a9ae1e0e4024555f2-Paper-Conference.pdf) (as "Indirect prompt injection")**
> Following malicious or unintended instructions embedded in external content such as emails, documents, or retrieved text.

**[Gandalf the Red: Adaptive Security for LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pfister25a/pfister25a.pdf) (as "Indirect prompt attack")**
> An observable attack where a malicious actor manipulates external data sources that an LLM accesses, causing the model to deviate from its intended behavior.

## Relationships

### Prompt injection →
- **AgentDojo** (measurements) — *measured_by*
  > AgentDojo (Debenedetti et al., 2024) offers a dynamic environment for testing prompt injection attacks, and AgentHarm (Andriushchenko et al., 2024) measures the potential harm from agents executing malicious tasks.
  - [OS Agents: A Survey on MLLM-based Agents for Computer, Phone and Browser Use](https://aclanthology.org/2025.acl-long.369.pdf)
