# Causal discovery
**Type:** Behavior  
**Referenced in:** 7 papers  
**Also known as:** Causal graph discovery, Causal graph construction, Full causal discovery  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats causal discovery as recovering or inferring causal structure from data, and sometimes from text. Definitions agree that the target is a causal structure or set of causal relations, but differ in how explicit the output must be: some describe recovering a latent structure or refining assumptions through targeted interventions into a causal subgraph, while another formulation requires, for every variable pair, choosing A causes B, B causes A, or no relation.

**Variants.** Papers study several named variants. Alongside the general task, they describe causal graph discovery as inferring a temporal directed graph over stocks with lagged causal links, causal graph construction as building item-action dependency structures from interaction records and interventions, and full causal discovery as pairwise direction judgments over a given variable set.

**Space of elicitation and scores.** Papers link this behavior to one measurement instrument, COPA, through a measured_by relation. The recorded operationalization is narrow: one paper states that it uses COPA "for causal discovery," and no other linked instrument is named.

**What it is taken as evidence of.** Papers connect it to three constructs overall. The prevailing construct-level link is to Causal reasoning, recorded as a related relation: papers place causal discovery among causal reasoning tasks and state that LLM-based causal discovery "performs causal reasoning under the guidance of the prompt." A smaller line of work claims causal relationships from causal discovery to Continual learning and to Interpretability and explainability, so papers do not use a single shared construct relation for it.

## Sources

**[Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)**
> The task of recovering the latent causal structure of variables from data or text.

**[CausalStock: Deep End-to-end Causal Discovery for News-driven Multi-stock Movement Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/54d689d58fe54c92aee2d732fc49fca8-Paper-Conference.pdf) (as "Causal graph discovery")**
> Inferring a temporal directed graph over stocks that represents lagged causal links between variables.

**[ADAM: An Embodied Causal Agent in Open-World Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/392aae924264f2c56d1895b232bb46b6-Paper-Conference.pdf) (as "Causal graph construction")**
> Building a directed structure of item-action dependencies from interaction records and interventions.

**[On the Reliability of Large Language Models for Causal Discovery](https://aclanthology.org/2025.acl-long.471.pdf) (as "Full causal discovery")**
> The observable task of, for each pair of variables in a given set, identifying whether a causal relation exists and in which direction (A causes B, B causes A, or no relation).

## Relationships

### Causal discovery →
- **Continual learning** (constructs) — *causes*
  > Newly discovered items enable the execution of new unknown actions and the CD on these actions. This iterative process ensures the lifelong learning through continuous engagement and adaptation.
  - [ADAM: An Embodied Causal Agent in Open-World Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/392aae924264f2c56d1895b232bb46b6-Paper-Conference.pdf)
- **Interpretability and explainability** (constructs) — *causes*
  > "ADAM constructs a nearly perfect causal graph from scratch, enabling efficient task decomposition and execution with strong interpretability."
  - [ADAM: An Embodied Causal Agent in Open-World Environments](https://proceedings.iclr.cc/paper_files/paper/2025/file/392aae924264f2c56d1895b232bb46b6-Paper-Conference.pdf)
- **COPA** (measurements) — *measured_by*
  > Specifically, we use COPA (Roemmele et al., 2011), NPDS (Tu et al., 2019), e-CARE (Du et al., 2022), and Corr2Cause (Jin et al., 2023b) for causal discovery... (Section 4.1)
  - [CausalEval: Towards Better Causal Reasoning in Language Models](https://aclanthology.org/2025.naacl-long.622.pdf)

### Associated with
- **Causal reasoning** (constructs)
  > Causal Reasoning tasks include causal discovery, cause attribution, and causal effect estimation [30, 58, 65]. (Section 2.2)
  - [Unveiling Causal Reasoning in Large Language Models: Reality or Mirage?](https://proceedings.neurips.cc/paper_files/paper/2024/file/af2bb2b2280d36f8842e440b4e275152-Paper-Conference.pdf)
- **Hypothesis generation** (behaviors tasks)
  > In hypothesis generation, we produce a causal graph by use of an LLM.
  - [Causal Modelling Agents: Causal Graph Discovery through Synergising Metadata- and Data-driven Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/fe90657b12193c7b52a3418bdc351807-Paper-Conference.pdf)
