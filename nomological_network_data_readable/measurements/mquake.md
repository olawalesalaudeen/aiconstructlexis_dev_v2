# MQuAKE
**Type:** Measurement  
**Referenced in:** 10 papers  
**Also known as:** MQUAKE  

## State of the Field

**What it is.** Across the papers, MQuAKE is most commonly described as a benchmark or dataset for evaluating model or knowledge editing through multi-hop knowledge questions. Definitions converge on question answering over edited facts: some emphasize reasoning over edited knowledge, while others emphasize whether edited knowledge propagates to related facts or supports knowledge editing generalization through multi-hop questions; one paper describes each case as a multi-hop question built from a chain of single-hop subquestions. A smaller line of description adds versions that vary in hop count and temporal knowledge, and one source snippet specifies questions with 2 to 4 hops and different positions of the knowledge used in the questions.

**What it is claimed to measure.** Papers link MQuAKE to 4 constructs and 1 behavioral indicator. The prevailing usage is to measure Multi-hop reasoning and Multi-hop question answering: papers describe it as evaluating multi-hop reasoning over edited knowledge, and one relationship states that Multi-hop Accuracy on MQuAKE measures the accuracy of multi-hop question answering. Smaller lines of work use it to measure Counterfactual reasoning, Context faithfulness, and Portability, so the reported measurement claims extend beyond one construct even though multi-hop evaluation is the dominant framing.

**Space of uses.** Papers position MQuAKE in two recurring ways: as a main multi-hop reasoning knowledge editing dataset, and as an auxiliary dataset for additional experiments. It appears alongside Counterfact, LongformEvaluation, and KnowEdit in some studies, while work that spells out the protocol reports Multi-hop Accuracy and Hop-wise Answering Accuracy. Papers do not describe it as being linked to another measurement instrument.

## Sources

**[AlphaEdit: Null-Space Constrained Knowledge Editing for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/29c8c615b3187ee995029284702d3f43-Paper-Conference.pdf) (as "MQUAKE")**
> A benchmark for evaluating model editing on multi-hop knowledge questions.

**[CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)**
> Multi-hop knowledge editing benchmark that evaluates models on question-answering tasks requiring reasoning over edited facts, with versions varying in hop count and temporal knowledge.

## Relationships

### → MQuAKE
- **Multi-hop question answering** (behaviors tasks) — *measured_by*
  > MQUAKE (Multi-hop Question Answering for Knowledge Editing) is a knowledge editing dataset focusing on the abovementioned multi-hop question answering tasks proposed in Zhong et al. (2023), where every case of MQUAKE is a multi-hop question made by a chain of single-hop subquestions. (Section 2.1)
  - [MQuAKE-Remastered: Multi-Hop Knowledge Editing Can Only Be Advanced with Reliable Evaluations](https://proceedings.iclr.cc/paper_files/paper/2025/file/f782860c2a5d8f675b0066522b8c2cf2-Paper-Conference.pdf)
- **Multi-hop reasoning** (constructs) — *measured_by*
  > experiments show that CaKE enables more accurate and consistent use of edited knowledge across related reasoning tasks, achieving an average improvement of 20% in multi-hop reasoning accuracy on the MQuAKE dataset (Abstract).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)
- **Context faithfulness** (constructs) — *measured_by*
  > "We use LLAMA2-7B-CHAT and LLAMA2-13B-CHAT as baseline models to conduct experiments on MQUAKE ... This verifies whether knowledge has been properly edited and effectively demonstrates LLMs’ context-faithfulness."
  - [Is Factuality Enhancement a Free Lunch For LLMs? Better Factuality Can Lead to Worse Context-Faithfulness](https://proceedings.iclr.cc/paper_files/paper/2025/file/660d0ed5885662219244b6e44aba8fe3-Paper-Conference.pdf)
- **Portability** (constructs) — *measured_by*
  > MQuAKE (Zhong et al., 2023) is a multi-hop benchmark... Portability evaluates the robustness of the generalization of the edit, evaluating whether the modified knowledge can be applied effectively to related content (e.g. Multi-Hop Reasoning).
  - [REACT: Representation Extraction And Controllable Tuning to Overcome Overfitting in LLM Knowledge Editing](https://aclanthology.org/2025.emnlp-main.860.pdf)
