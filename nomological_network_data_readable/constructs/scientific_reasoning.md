# Scientific reasoning
**Type:** Construct  
**Referenced in:** 43 papers  

## State of the Field

**Definition agreement:** Complementary. Most papers define scientific reasoning as the ability to use scientific concepts or domain knowledge to interpret evidence or multimodal information and make multi-step inferences to answer science questions or solve problems. A few papers emphasize narrower or broader aspects such as hypothesis formation, avoiding unjustified conclusions, complex visualizations, or open-ended rather than multiple-choice answering, so they point to the same general phenomenon but with different scope and facets rather than one identical definition.

**Space of definitions.** Most commonly, papers describe scientific reasoning as the ability to reason about scientific concepts, questions, data, or figures by applying domain knowledge and multi-step inference. Many definitions place it in science question answering or research settings, including complex research problems, multimodal evidence such as figures, tables, charts, or other visual or textual material, and sometimes long-context understanding. Smaller lines of work narrow it to judging whether claims are justified by scientific evidence and study limitations, while another broadens it to the scientific process itself, including inference from data, hypothesis formulation, and deriving solutions.

**Space of facets.** Several papers use scientific reasoning as one category in a broader family of reasoning tasks rather than break it into agreed subcomponents. It is presented alongside other mathematical and logical reasoning categories, and some papers pair it with long-context understanding or with discovery-oriented activities such as inference from data and hypothesis formulation. A recurring contrast is with memorization, and one related paper states that Commonsense reasoning "largely deviates" from scientific reasoning that requires math and physics backgrounds.

**Space of measurement.** Papers link scientific reasoning to 7 measurement instruments and 2 behavioral indicators. The most frequently linked instruments are ScienceQA, ARC-Challenge, ARC, SciQ, and ScienceWorld, plus 2 other benchmarks; the recorded operationalization is therefore benchmark-based rather than human evaluation, LLM-as-a-judge, or probes. These benchmarks instantiate scientific question answering, multimodal multiple-choice reasoning, difficulty-split scientific reasoning questions, application of scientific concepts beyond fact recall, and interactive embodied science experiments, which lines up most clearly with definitions centered on question answering and multi-step inference.

**Links.** Beyond measurement, one paper claims a causal relationship from Scientific reasoning to Scientific problem solving, in a setting where models improve when background is provided. Papers otherwise record related, not correlational, links: Scientific reasoning is related to Task decomposition, Commonsense reasoning is related to Scientific reasoning and is described as deviating from it, and Knowledge acquisition is related to Scientific reasoning through "the internalization of knowledge for easy questions". No correlation link is recorded.

## Sources

**[At Which Training Stage Does Code Data Help LLMs Reasoning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c2aa1e456ea543997f6927295196381-Paper-Conference.pdf)**
> The ability to reason about scientific concepts, data, and figures, particularly in academic or research contexts involving complex visualizations.

## Relationships

### Scientific reasoning →
- **ARC-Challenge** (measurements) — *measured_by*
  > we evaluate the proposed TOW on ... ARC-Challenge (Clark et al., 2018) for scientific reasoning.
  - [ToW: Thoughts of Words Improve Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.157.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > We use the ScienceQA dataset (Lu et al., 2022) to evaluate the scientific reasoning ability of the model. (Section 3.1)
  - [At Which Training Stage Does Code Data Help LLMs Reasoning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/9c2aa1e456ea543997f6927295196381-Paper-Conference.pdf)
- **SciQ** (measurements) — *measured_by*
  > SciQ measures scientific reasoning, challenging models to apply scientific concepts beyond mere fact recall. (Section 4.2)
  - [Neuron-based Multifractal Analysis of Neuron Interaction Dynamics in Large Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6158e152498f8d8b83d14388a7ec1963-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > We evaluate RATIONALYST across diverse reasoning tasks including ... scientific (ARC (Clark et al., 2018)) (Section 4.2)
  - [RATIONALYST: Pre-training Process-Supervision for Improving Reasoning](https://aclanthology.org/2025.acl-long.1288.pdf)
- **SciBench** (measurements) — *measured_by*
  > Tree-Search policy which are compared on college-level scientific reasoning benchmark under three LLMs, such as CoT and ToT, as shown in Table 4. We also evaluated under the same search budget on MATH and SciBench
  - [ReST-MCTS*: LLM Self-Training via Process Reward Guided Tree Search](https://proceedings.neurips.cc/paper_files/paper/2024/file/76ec4dc30e9faaf0e4b6093eaa377218-Paper-Conference.pdf)
- **Scientific problem solving** (behaviors tasks) — *causes*
  > all models substantially improve performance when background is provided, indicating their lack of knowledge and reasoning capability in these natural science fields. (Section 2.4)
  - [SciCode: A Research Coding Benchmark Curated by Scientists](https://proceedings.neurips.cc/paper_files/paper/2024/file/36850592258c8c41cecdaa3dea5ff7de-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Task decomposition** (behaviors tasks)
  > PDE-Controller ... enhances scientific reasoning by proposing novel subgoals to improve open-loop control utility. (Section 1)
  - [PDE-Controller: LLMs for Autoformalization and Reasoning of PDEs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/soroco25a/soroco25a.pdf)
- **Commonsense reasoning** (constructs)
  > commonsense logic captured by popular language datasets (Gao et al., 2020; Weber et al., 2024) largely deviates from scientific reasoning that requires math and physics backgrounds, leading to poor performance (Table 4 and 9). (Section 1)
  - [PDE-Controller: LLMs for Autoformalization and Reasoning of PDEs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/soroco25a/soroco25a.pdf)
