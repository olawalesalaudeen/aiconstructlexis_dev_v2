# WebArena
**Type:** Measurement  
**Referenced in:** 26 papers  

## State of the Field

**What it is.** Across papers, WebArena is most commonly described as a realistic web-based interactive environment and benchmark for evaluating autonomous or web agents on long-horizon tasks. Definitions variously present it as a simulated browser environment navigated through natural language and code, a set of 812 test examples focused on grounding high-level natural language instructions to interactions with functional correctness, and a benchmark built from realistic or functional websites and open-source clones across domains such as e-commerce, forums, development platforms, content management, shopping, and sites like Reddit, GitLab, and Wikipedia. A smaller subset of papers focuses on particular slices of it, such as the full dataset or the Reddit domain within WebArena.

**What it is claimed to measure.** Papers link WebArena to one construct and two behavioral indicators. The prevailing usage is as a measure of web navigation: several papers evaluate agents on web browsing or web navigation with WebArena, often stressing real-world or realistic web interactions. A smaller line of work uses it to measure task completion, and some papers report it as evaluating generalization or generalizability, for example because it contains different types of websites and task intents in a single suite. Overall, the recorded claims cluster around web navigation rather than spreading across many constructs.

**Space of uses.** In use, papers commonly use WebArena to evaluate web agents, sometimes on the full dataset and sometimes on a narrower domain such as Reddit. Papers use it alongside Mind2Web and MiniWoB++, and some place it beside ALFWorld, VisualWebArena, and WebVoyager. Other work reuses its environments or workflows as source material for later benchmarks.

## Sources

**[Lemur: Harmonizing Natural Language and Code for Language Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/41ec0e510c31883f3b50a782651fb5b9-Paper-Conference.pdf)**
> Web-based interactive environment for evaluating agents' ability to navigate and complete tasks in a simulated browser through natural language and code.

## Relationships

### → WebArena
- **Web navigation** (behaviors tasks) — *measured_by*
  > WebArena [8]: This web-based benchmark introduces realistic environments by replicating the functionality and data found in popular web domains (e.g., Gitlab, Reddit, Wikipedia). (Section 4.1.1)
  - [AutoGuide: Automated Generation and Selection of Context-Aware Guidelines for Large Language Model Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/d8efbb5dd415974eb095c3f06bff1f48-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > Furthermore, we evaluate LCoW’s generalization capabilities in WebArena benchmark.
  - [Learning to Contextualize Web Pages for Enhanced Decision Making by LLM Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/c995a913bc20ca39ce2231b8973be90a-Paper-Conference.pdf)
- **Task completion** (behaviors tasks) — *measured_by*
  > This benchmark is particularly suitable for evaluating real-world task completion capabilities due to its focus on practical web interactions. (Section 3.1)
  - [AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://proceedings.iclr.cc/paper_files/paper/2025/file/c681fb2bf1d785fbc766f3ea14758aab-Paper-Conference.pdf)
