# LLaVA-Bench-in-the-Wild
**Type:** Measurement  
**Referenced in:** 46 papers  
**Also known as:** llava-bench-in-the-wild, LLaVA Bench, LLaVA-in-the-wild, LLaVA-wild, LLaVA-Wild, LLaVABench, LLaVA-Bench Wild, LLaVA-Bench, LLaVA-Bench (In-the-Wild)  

## State of the Field

**What it is.** Across papers, the prevailing usage treats it as an in-the-wild, open-ended benchmark for multimodal dialogue, image understanding, and real-world visual questions. Definitions often describe challenging images and questions, and several specify 24 images with 60 questions organized around conversation, detailed description, and complex reasoning; some papers describe it more narrowly as conversational VQA, visual conversation, or single-image long-form reasoning. A recurring detail is model-based scoring, with GPT-4, GPT-4V, or GPT-4o used for evaluation, and one paper also treats the Wild variant as a dataset for varying visual input semantics alongside a COCO version.

**What it is claimed to measure.** Across papers, the relationships reported for it are entirely measurement claims, and papers link it to 6 constructs and 10 behavioral indicators. The most frequently linked behavioral indicators are complex reasoning question answering, visual question answering, detailed image description, multi-turn dialogue, and catastrophic forgetting, with five other behavioral indicators also present. On the construct side, papers report it as measuring helpfulness, visual understanding, generalization, knowledge grounding, and multimodal understanding, plus one other construct, so its claimed measurement role is spread across several targets rather than centered on one.

**Space of uses.** No measurement instrument is linked to it. Papers instead commonly report it within broader multimodal evaluation suites, often alongside MMMU, MMBench, MME, SEED-Bench, and MM-Vet. The prevailing positioning is as a general capability or image-level understanding benchmark, though some papers use it as a case-study set, a post-unlearning utility check, a long-generation evaluation, or a robustness and generalization test.

## Sources

**[Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)**
> An evaluation benchmark for open-ended multimodal dialogue and image understanding in unconstrained settings.

**[SGLang: Efficient Execution of Structured Language Model Programs](https://proceedings.neurips.cc/paper_files/paper/2024/file/724be4472168f31ba1c9ac630f15dec8-Paper-Conference.pdf) (as "llava-bench-in-the-wild")**
> Benchmark for evaluating multimodal language models on image-based tasks and questions.

**[Self-Correcting Decoding with Generative Feedback for Mitigating Hallucinations in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/109cf25cbc36037deecdbeabfa199956-Paper-Conference.pdf) (as "LLaVA-Bench")**
> LLaVA-Bench is a benchmark containing challenging multimodal images and questions used to evaluate LVLM responses, including GPT-4V-aided assessment.

**[ClawMachine: Learning to Fetch Visual Tokens for Referential Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/b1abd42eb5aace7f0ad9ba9cfb029f54-Paper-Conference.pdf) (as "LLaVA Bench")**
> A conversational VQA benchmark containing questions about conversations, detailed descriptions, and complex reasoning.

**[Unhackable Temporal Reward for Scalable Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1e5b9a51dcd78528795584860797fdb-Paper-Conference.pdf) (as "LLaVA-wild")**
> An image understanding benchmark for evaluating performance on in-the-wild visual questions.

**[CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf) (as "LLaVA-Wild")**
> A dataset used for general capability evaluation of multimodal models, often scored using a stronger model as an evaluator.

**[TaskGalaxy: Scaling Multi-modal Instruction Fine-tuning with Tens of Thousands Vision Task Types](https://proceedings.iclr.cc/paper_files/paper/2025/file/e885e5bc6e13b9dd8f80bc5482b1fa2f-Paper-Conference.pdf) (as "LLaVA-in-the-wild")**
> A benchmark evaluating visual conversation abilities and leveraging GPT-4o for response evaluation.

**[Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping](https://proceedings.iclr.cc/paper_files/paper/2025/file/36d9468ebdb76b9b229fbd343fff84d5-Paper-Conference.pdf) (as "LLaVABench")**
> An evaluation benchmark used to assess Large Vision-Language Models on visual question answering tasks.

**[Understanding Multimodal LLMs Under Distribution Shifts: An Information-Theoretic Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oh25a/oh25a.pdf) (as "LLaVA-Bench Wild")**
> A benchmark dataset used to introduce visual distribution shifts by varying visual input semantics for evaluating multimodal large language models.

**[Advancing Fine-Grained Visual Understanding with Multi-Scale Alignment in Multi-Modal Models](https://aclanthology.org/2025.emnlp-main.721.pdf) (as "LLaVA-Bench (In-the-Wild)")**
> LLaVA-Bench (In-the-Wild) is an evaluation benchmark consisting of challenging, open-ended visual questions captured 'in the wild' to test real-world performance.

## Relationships

### → LLaVA-Bench-in-the-Wild
- **Complex reasoning question answering** (behaviors tasks) — *measured_by*
  > LLaVA-Bench serves as a general benchmark for systematic comprehension, encompassing three categories: conversation, detailed description, and complex questions. (Section 4.2)
  - [Automated Multi-level Preference for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2e3073cb65608aa887bb945c382e687f-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > In this section, we present the experiment results of STIC across seven visual question answering (VQA) benchmarks. We consider the widely used benchmarks for LVLM evaluation across different domains including: ScienceQA... TextVQA... ChartQA... LLaVA-Bench
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > LLaVA-Bench consists of 60 carefully designed open-ended questions across 24 images, evaluating models’ visual reasoning and understanding capabilities. (Sec. 6.1)
  - [Activation Steering Decoding: Mitigating Hallucination in Large Vision-Language Models through Bidirectional Hidden State Intervention](https://aclanthology.org/2025.acl-long.634.pdf)
- **Detailed image description** (behaviors tasks) — *measured_by*
  > LLaVA-Bench, a generalized dataset, comprising 24 diverse images and 60 questions across categories like simple QA, detailed descriptions, and complex reasoning, is used to further evaluate the model’s generalization and robustness. (Section 4.1)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > we also leverage MMMU (Yue et al., 2024) and LLaVA-Bench (Liu et al., 2024b) to assess the model’s reasoning ability and helpfulness level. (Section 3.3.1)
  - [Protecting Privacy in Multimodal Large Language Models with MLLMU-Bench](https://aclanthology.org/2025.naacl-long.207.pdf)
- **Visual instruction following** (behaviors tasks) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **Multi-turn dialogue** (behaviors tasks) — *measured_by*
  > LLaVA-Bench serves as a general benchmark for systematic comprehension, encompassing three categories: conversation, detailed description, and complex questions. (Section 4.2)
  - [Automated Multi-level Preference for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2e3073cb65608aa887bb945c382e687f-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > To evaluate the extent of catastrophic forgetting in Yo’LLaVA, we assessed both the Original LLaVA-1.5-13B [10] and Yo’LLaVA using common benchmarks for multimodal models: POPE [41], MMBench [42], and LLaVA-Wild [2]. (Appendix B)
  - [Yo'LLaVA: Your Personalized Language and Vision Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/48088756ec0ce6ba362bddc7ebeb3915-Paper-Conference.pdf)
- **Image captioning** (behaviors tasks) — *measured_by*
  > LLaVA-Bench (Liu et al., 2023b) consists of 24 images and 60 questions to assess LVLMs' performance on complex tasks and domain adaptation. Following Leng et al. (2024), we use GPT-4 to assess the accuracy and detailedness of LVLM's image captioning
  - [Do You Keep an Eye on What I Ask? Mitigating Multimodal Hallucination via Attention-Guided Ensemble Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/637b275a6e65924719198188fc939632-Paper-Conference.pdf)
- **Robustness** (constructs) — *measured_by*
  > To assess robustness, we tested on the generalized dataset LLaVA-Bench. (Section 4)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > LLaVA-Bench, a generalized dataset, ... is used to further evaluate the model’s generalization and robustness. (Section 4.1)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > we mainly used LLaVA v1.5 (Liu et al., 2024a) and LLaVA NeXT (Liu et al., 2024b) in 7B and 13B sizes and evaluated them on the LLaVA-Bench COCO and LLaVA-Bench Wild (Liu et al., 2023) datasets to assess open-ended generation quality.
  - [Understanding Multimodal LLMs Under Distribution Shifts: An Information-Theoretic Approach](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oh25a/oh25a.pdf)
- **Knowledge grounding** (constructs) — *measured_by*
  > Furthermore, LLaVABench emphasizes not only multimodal alignment but also the model’s ability to perform knowledge grounding in complex real-world scenarios. (Section 4.2)
  - [DS-VLM: Diffusion Supervision Vision Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25p/sun25p.pdf)
- **Long-form text generation** (behaviors tasks) — *measured_by*
  > Long Generation: Evaluates extended inference using LLaVABench (Liu et al., 2024b) and MMDU (Liu et al., 2024e). (Section 4.3).
  - [CoMemo: LVLMs Need Image Context with Image Memory](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liu25bn/liu25bn.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > LLaVA Bench (Li et al., 2024) assesses multimodal understanding and reasoning capabilities, with overall accuracy reported across all tasks (Section 4.1).
  - [Mitigating Hallucinations in Large Vision-Language Models via Entity-Centric Multimodal Preference Optimization](https://aclanthology.org/2025.emnlp-main.982.pdf)
