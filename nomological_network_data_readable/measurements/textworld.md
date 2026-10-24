# TextWorld
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Across the papers, TextWorld is most commonly described as a text-based agent benchmark centered on interactive fiction or other text-based games. Definitions frame it either as an evaluation benchmark for capabilities like planning, commonsense reasoning, and exploration, or as a benchmark sandbox for training and evaluating reinforcement learning agents. One paper also describes it as entirely text-based, with no visual component, where the agent explores mazes and interacts with everyday objects through natural language.

**What it is claimed to measure.** Across the papers, TextWorld is linked as measuring 3 constructs and 1 behavioral indicator. The named construct links are Planning, Commonsense reasoning, and Memory, and one study describes its tasks as requiring commonsense reasoning, long-term planning, and memory. Navigation is the linked behavioral indicator, with a paper connecting it to maze exploration and natural-language interaction with objects, so the measurement claims spread across several capabilities rather than a single construct.

**Space of uses.** Papers use TextWorld as a text environment for evaluating agents on long-horizon memory and planning, exploration, commonsense, and partial observability, and another paper uses it as a discrete domain in a broader framework for LLM-guided reinforcement learning in online and offline settings. One study calls it a classic text-based agent benchmark (Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models). No other measurement instrument is linked to it.

## Sources

**[Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf)**
> A text-based agent benchmark for evaluating capabilities like planning, commonsense reasoning, and exploration in interactive fiction games.

## Relationships

### → TextWorld
- **Planning** (constructs) — *measured_by*
  > Problem Type partial observability, long-term planning and memory, and common sense (Table 1).
  - [Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > tasks requiring long-horizon memory and planning, exploration, and commonsense in TextWorld
  - [Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf)
- **Navigation** (behaviors tasks) — *measured_by*
  > An entirely text-based game with no visual component, where the agent has to explore mazes and interact with everyday objects through natural language
  - [BALROG: Benchmarking Agentic LLM and VLM Reasoning On Games](https://proceedings.iclr.cc/paper_files/paper/2025/file/f0b1515be276f6ba82b4f2b25e50bef0-Paper-Conference.pdf)
- **Memory** (constructs) — *measured_by*
  > tasks requiring long-horizon memory and planning, exploration, and commonsense in TextWorld
  - [Intelligent Go-Explore: Standing on the Shoulders of Giant Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/369a30aac2765950865efd318cef7f76-Paper-Conference.pdf)
