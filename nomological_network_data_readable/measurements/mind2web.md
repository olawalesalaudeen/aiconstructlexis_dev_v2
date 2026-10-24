# Mind2Web
**Type:** Measurement  
**Referenced in:** 18 papers  

## State of the Field

**What it is.** Most papers treat Mind2Web as a real-world web navigation benchmark or dataset for agents following language instructions on real websites. Definitions commonly describe human demonstrations or action-annotated tasks, often citing about 2K instructions from 137 websites, and they emphasize cross-task, cross-website, and cross-domain generalization, with one description presenting these as three test categories. The prevailing framing is an offline evaluation setting, though some papers narrow it to action prediction or multi-step planning, and one paper recasts each task as a dynamic how-to question with multiple possible outcomes per step. Papers commonly mention step success rate and element accuracy, while some also include action F1, task-level success rate, or step accuracy.

**What it is claimed to measure.** Across papers, Mind2Web is linked to 4 behavioral indicators and 2 constructs. The prevailing usage is to measure web navigation, with papers using it to evaluate agents performing complex instructions on real-world websites, and a smaller recurring line uses it to measure action prediction, especially generalization across tasks, websites, and domains. Papers also use it to measure the constructs adaptability and planning, while a few papers extend the measurement claim to other behavioral indicators. Taken together, the claims spread across several related targets rather than converging on a single construct.

**Space of uses.** No measurement instrument is linked to it. Papers instead position Mind2Web mainly as an evaluation benchmark or test set for web agents, sometimes alongside WebArena, and one study places it beside ScreenSpot, MiniWob, and AITW when validating task accuracy and adaptability. Other papers use it as a data source as well, collecting trajectories from it or selecting it for web navigation scenarios such as shopping, entertainment, and services.

## Sources

**[A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)**
> Real-world web navigation benchmark containing human demonstrations across open-domain websites, assessing generalization across tasks, websites, and domains using step success rate and element accuracy.

## Relationships

### → Mind2Web
- **Web navigation** (behaviors tasks) — *measured_by*
  > We adopt Mind2Web and WebArena for evaluation for their generalizability and resemblance of real-world web interactions. (Section 2)
  - [Web Agents with World Models: Learning and Leveraging Environment Dynamics in Web Navigation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a00548031e4647b13042c97c922fadf1-Paper-Conference.pdf)
- **Action prediction** (behaviors tasks) — *measured_by*
  > It provides action prediction tasks that measure the generalization of LLMs across the tasks, websites, and their domains (e.g. travel, shopping) (Section 4.2).
  - [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)
- **Planning** (constructs) — *measured_by*
  > SoTA performance on Mind2Web, an ofﬂine task planning evaluation (Section 1).
  - [A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf)
- **Privacy leakage** (behaviors tasks) — *measured_by*
  > We collect 177 action steps that involve diverse PII categories on realistic websites from the Mind2Web dataset, and conduct experiments using one of the most capable generalist web agent frameworks to date. (Abstract)
  - [EIA: ENVIRONMENTAL INJECTION ATTACK ON GENERALIST WEB AGENTS FOR PRIVACY LEAKAGE](https://proceedings.iclr.cc/paper_files/paper/2025/file/a73474c359ed523e6cd3174ed29a4d56-Paper-Conference.pdf)
- **Adaptability** (constructs) — *measured_by*
  > Our approach demonstrates superior performance in task accuracy and adaptability, as validated by benchmarks such as ScreenSpot, MiniWob, AITW, and Mind2Web.
  - [Grounding Multimodal Large Language Model in GUI World](https://proceedings.iclr.cc/paper_files/paper/2025/file/31fc85f7461ce71eadf27fb7281973bd-Paper-Conference.pdf)
