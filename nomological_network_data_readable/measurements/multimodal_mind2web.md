# Multimodal Mind2Web
**Type:** Measurement  
**Referenced in:** 4 papers  
**Also known as:** Multimodal-Mind2Web  

## State of the Field

**What it is.** Most descriptions treat Multimodal Mind2Web as a multimodal extension of Mind2Web used for offline evaluation of web or GUI agents. Papers describe it as evaluating web agent task completion from cached screenshots and high-level task instructions, with a test split of 1,013 tasks spanning over 100 websites; another recurring framing is that it evaluates increasingly difficult cross-task, cross-website, and cross-domain generalization. A smaller line of work describes it as an in-distribution offline dataset for GUI-agent tasks involving web browsers.

**What it is claimed to measure.** Where papers make explicit measurement claims, they use it to measure 1 construct and 1 behavioral indicator. One paper uses it to measure Generalization, stating that it evaluates generalization across cross-task, cross-website, and cross-domain settings. Another paper uses it to measure Action grounding, using its test data to further assess GUI grounding models after alignment.

**Space of uses.** No measurement instrument is linked to it. Papers position it as an offline evaluation benchmark for realistic web tasks, and one paper also describes it as a challenging benchmark on which evaluation showed steady improvements with data scaling. In other usage, one paper evaluates alongside Android World and Android Control, and another uses its test data as an additional evaluation for GUI grounding models after alignment.

## Sources

**[AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://proceedings.iclr.cc/paper_files/paper/2025/file/c681fb2bf1d785fbc766f3ea14758aab-Paper-Conference.pdf)**
> An extension of the Mind2Web benchmark used to evaluate an agent's generalization capabilities across increasingly difficult settings: cross-task, cross-website, and cross-domain.

**[Navigating the Digital World as Humans Do: Universal Visual Grounding for GUI Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/4ca0e369689dadb25a5345ba9755ad6f-Paper-Conference.pdf) (as "Multimodal-Mind2Web")**
> An offline benchmark for evaluating web agent task completion using cached screenshots and high-level task instructions across over 100 websites.

## Relationships

### → Multimodal Mind2Web
- **Generalization** (constructs) — *measured_by*
  > Second, Multimodal-Mind2Web (Deng et al., 2024; Zheng et al., 2024) extends the Mind2Web benchmark to evaluate generalization across three increasingly challenging settings: cross-task, cross-website, and cross-domain. (Section 3.1)
  - [AgentTrek: Agent Trajectory Synthesis via Guiding Replay with Web Tutorials](https://proceedings.iclr.cc/paper_files/paper/2025/file/c681fb2bf1d785fbc766f3ea14758aab-Paper-Conference.pdf)
- **Action grounding** (behaviors tasks) — *measured_by*
  > We extend our evaluation by following Gou et al. (2024) to leverage the test data from Multimodal-Mind2Web (Zheng et al., 2024b) for further assessing the GUI grounding models after the alignment. (Section 5.1)
  - [GUI-Bee: Align GUI Action Grounding to Novel Environments via Autonomous Exploration](https://aclanthology.org/2025.emnlp-main.1688.pdf)
