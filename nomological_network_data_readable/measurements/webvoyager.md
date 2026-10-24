# WebVoyager
**Type:** Measurement  
**Referenced in:** 5 papers  

## State of the Field

**What it is.** Across the surveyed papers, WebVoyager is most commonly treated as a dynamic, real-world web dataset or benchmark for evaluating long-horizon planning in web navigation, with task completion assessed in realistic environments. A smaller framing presents it as an out-of-distribution benchmark for evaluating web-agent generalization, emphasizing that it covers diverse domains unseen in the WebArena environment.

**What it is claimed to measure.** Papers use WebVoyager to measure one behavioral indicator, Web navigation, and one construct, Generalization. The prevailing usage is to evaluate web navigation in real-world or live settings, while a smaller line of work reports it as measuring generalization by testing agents on the tasks and golden answers proposed in WebVoyager.

**Space of uses.** In use, papers frequently place WebVoyager alongside WebArena, for example evaluating on the full WebArena dataset as well as WebVoyager, and one study pairs it with Mind2Web-Live as a live web navigation benchmark. It is positioned both as a main evaluation benchmark for real-world websites and as an additional evaluation setting for unseen domains beyond WebArena.

## Sources

**[Plan-and-Act: Improving Planning of Agents for Long-Horizon Tasks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/erdogan25a/erdogan25a.pdf)**
> Dynamic, real-world web dataset for evaluating long-horizon planning in web navigation, assessing task completion in realistic environments.

## Relationships

### → WebVoyager
- **Web navigation** (behaviors tasks) — *measured_by*
  > We validate PAE on challenging vision-based web navigation, using both real-world and self-hosted websites from WebVoyager and WebArena. (Abstract)
  - [Proposer-Agent-Evaluator (PAE): Autonomous Skill Discovery For Foundation Model Internet Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25ah/zhou25ah.pdf)
- **Generalization** (constructs) — *measured_by*
  > To further assess AGENTOCCAM’s generalizabilty, we extend experiments to the real-world web environments, evluated with the tasks and golden answers proposed in WebVoyager (He et al., 2024). (Section 2)
  - [AgentOccam: A Simple Yet Strong Baseline for LLM-Based Web Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/f2c6e459b95694a24ac69c469a4ee746-Paper-Conference.pdf)
