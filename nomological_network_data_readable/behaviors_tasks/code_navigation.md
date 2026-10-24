# Code navigation
**Type:** Behavior  
**Referenced in:** 4 papers  
**Also known as:** Code repository navigation, Codebase exploration  

## State of the Field

**Space of definitions.** Across definitions, the prevailing usage treats code navigation as an agent's exploration of a code repository or codebase, moving across its structure and contents to locate relevant information. Papers agree on navigation through files and code entities such as functions and classes, and on search for context or relevant functionality. They differ mainly in the stated end goal: some frame it as answering questions or performing actions in a repository, while others frame it as gathering context and identifying relevant code entities, or more narrowly as "finding where relevant functionality is implemented".

**Variants.** Papers use several near-synonymous names, most commonly code navigation, alongside code repository navigation and codebase exploration. The studied settings include long-context understanding tasks, structured navigation built over a repository graph, compact navigation supported by multi-step movement among files, functions, and classes, and issue-localization settings that emphasize exploring the codebase while balancing context granularity and search space.

**Space of elicitation and scores.** No measurement instrument is linked to it. The available papers describe the behavior directly, as repository navigation and search actions over files and code entities, rather than naming a shared instrument that elicits or scores it.

**What it is taken as evidence of.** Papers link it to 3 constructs, but they do not present a single agreed construct that it reflects. Instead, papers claim a causal relationship from Action planning to Code navigation and from Chain-of-thought reasoning to Code navigation, while Code navigation is related to Code understanding.

## Sources

**[Dialogue Without Limits: Constant-Sized KV Caches for Extended Response in LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ghadia25a/ghadia25a.pdf) (as "Code repository navigation")**
> The task of understanding and navigating the structure and content of a code repository to answer questions or perform actions.

**[Nemotron-CORTEXA: Enhancing LLM Agents for Software Engineering Tasks via Improved Localization and Solution Diversity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sohrabizadeh25a/sohrabizadeh25a.pdf)**
> The process of an agent exploring a codebase by moving between different files and code entities like functions and classes.

**[OrcaLoca: An LLM Agent Framework for Software Issue Localization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25x/yu25x.pdf) (as "Codebase exploration")**
> The observable process of an agent navigating and searching through a code repository to gather context and identify relevant code entities.

## Relationships

### → Code navigation
- **Action planning** (constructs) — *causes*
  > To address challenge 1), we design a dynamic action scheduling system that incorporates priority queues and LLM-guided action generation for codebase exploration. The priority queue dynamically reorders actions based on their contextual relevance and urgency, solving the shortcomings of previous systems that lacked effective action management. (Section 1)
  - [OrcaLoca: An LLM Agent Framework for Software Issue Localization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25x/yu25x.pdf)
- **Chain-of-thought reasoning** (constructs) — *causes*
  > we equip the localization agent with programming tools based on Abstract Syntax Tree (AST) and Language Server Protocol (LSP) that enable compact code navigation by taking advantage of multi-step reasoning. (Section 1)
  - [Nemotron-CORTEXA: Enhancing LLM Agents for Software Engineering Tasks via Improved Localization and Solution Diversity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sohrabizadeh25a/sohrabizadeh25a.pdf)

### Associated with
- **Code understanding** (constructs)
  > One important challenge in code understanding is code navigation: finding where relevant functionality is implemented. (Section 2.4)
  - [Position: Future Research and Challenges Remain Towards AI for Software Engineering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gu25e/gu25e.pdf)
