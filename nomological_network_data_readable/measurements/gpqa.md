# GPQA
**Type:** Measurement  
**Referenced in:** 92 papers  

## State of the Field

**What it is.** Across papers, GPQA is most commonly described as a graduate-level, "Google-proof" question answering benchmark, usually centered on biology, physics, and chemistry and written by domain experts or PhD-level experts. Several definitions make its multiple-choice format explicit, and some describe it as consisting of 448 questions. Most descriptions keep the focus on those science domains, though one paper says it spans various disciplines and another emphasizes difficult physics and chemistry questions; a smaller line of work refers to it more generically as a reasoning or general-purpose QA benchmark.

**What it is claimed to measure.** Papers use GPQA to measure 10 constructs and 5 behavioral indicators. The prevailing usage is to measure Reasoning, followed by Generalization and General ability; at the behavioral level, the recurring framings are Multiple-choice question answering and Question answering. Overall, papers report it as evaluating a broad spread of targets rather than a single construct alone.

**Space of uses.** Papers usually place GPQA inside broader benchmark suites rather than using it alone, often alongside MMLU, ARC-C, BBH, and GSM8K. They typically position it as a challenging benchmark for scientific or general reasoning, and some papers use it as an out-of-domain or previously unseen task to check generalization. Reported setups include 0-shot and 8-shot evaluation, and one study converts it to binary choices; no measurement instrument is linked to it.

**Concerns raised.** Concern-focused discussion is limited, but one paper uses GPQA as an uncontaminated dataset in a controlled contamination experiment, noting that it was released in 2023, beyond the target models' knowledge cutoff.

## Sources

**[CURIE: Evaluating LLMs on Multitask Scientific Long-Context Understanding and Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1ae4999aefb509d75d8608e07280922c-Paper-Conference.pdf)**
> A benchmark of graduate-level questions in biology, physics, and chemistry, used for comparison to evaluate scientific domain expertise.

## Relationships

### → GPQA
- **Reasoning** (constructs) — *measured_by*
  > To rigorously assess the capabilities of models in reasoning abilities across different domains, we utilize several widely used datasets, GSM8K [Cobbe et al., 2021], MATH [Hendrycks et al., 2021b], TheoremQA [Chen et al., 2023b], BIG-Bench Hard (BBH) [Suzgun et al., 2022], ARC-C [Clark et al., 2018], GPQA [Rein et al., 2023], MMLU-STEM [Hendrycks et al., 2021a]. (Section 3.2)
  - [MAmmoTH2: Scaling Instructions from the Web](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4ca07aa108036f80cbb5b82285fd4b1-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > Additionally, we evaluate the model’s generalization performance across six out-of-domain tasks, including MT-Bench (Zheng et al., 2024), ARC-Challenge (25-shot) (Clark et al., 2018), GSM8K (8-shot) (Cobbe et al., 2021), HellaSwag (8-shot) (Zellers et al., 2019), GPQA (0-shot) (Rein et al., 2023), and MMLU (0-shot) (Hendrycks et al., 2020).
  - [Montessori-Instruct: Generate Influential Training Data Tailored for Student Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/ba1d33849b963efc6b5d3082ad68f480-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > We evaluated the general capabilities of the models on benchmarks related to general-domain chat (MT-Bench [83] and Alpaca-Eval [37]), general MCQs (MMLU [34] and GPQA [54]), and mathematical tasks (MATH [22] and GSM8k [12]). (Section 4.1)
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > question-answering [GPQA, 51] (Introduction).
  - [Many-Shot In-Context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/8cb564df771e9eacbfe9d72bd46a24a9-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > To assess the impact of DRAG on retrieval-augmented multiple-choice question answering (MCQA), we conduct extensive experiments across four benchmark datasets: ARC-C, MedMCQA, GPQA, and MMLU
  - [DRAG: Distilling RAG for SLMs from LLMs to Transfer Knowledge and Mitigate Hallucination via Evidence and Graph-based Distillation](https://aclanthology.org/2025.acl-long.358.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > To demonstrate the effectiveness of SPA in the natural language understanding domain, we evaluate its performance on several diverse tasks, including Big-Bench Hard (BBH) (Suzgun et al., 2022), GPQA (Rein et al., 2023), MMLU (Hendrycks et al., 2020), and WinoGrande (Sakaguchi et al., 2019).
  - [Synthesize, Partition, then Adapt: Eliciting Diverse Samples from Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6e2861dabad3fe21a71914ccfbfff976-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs) — *measured_by*
  > For instance, models frequently demonstrate high performance on standardized test-style questions yet struggle when faced with complex planning or multi-step reasoning challenges, a limitation highlighted by specialized benchmarks like PlanBench (Valmeekam et al., 2022), GPQA (Rein et al., 2023), and HLE (Phan et al., 2025). (Section 2.4)
  - [In Benchmarks We Trust ... Or Not?](https://aclanthology.org/2025.emnlp-main.1208.pdf)
- **Tool use** (behaviors tasks) — *measured_by*
  > GPQA (Rein et al., 2023) evaluates agents’ ability for coordinated tool use when solving challenging graduate-level problems. (§4.4)
  - [OpenHands: An Open Platform for AI Software Developers as Generalist Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a4b6ad6b48850c0c331d1259fc66a69c-Paper-Conference.pdf)
- **Data contamination** (constructs) — *measured_by*
  > we consider a benchmark dataset, Google-proof QA or GPQA (Rein et al., 2023), where questions were written by domain-experts in biology, physics, and chemistry. The dataset was released in 2023— beyond the knowledge cutoff of the target models in this study. The combination of novel written text and the release date of the benchmark leads to our decision to consider GPQA as unlikely to be contaminated for these models. (Section 4.3)
  - [Information-Guided Identification of Training Data Imprint in (Proprietary) Large Language Models](https://aclanthology.org/2025.naacl-long.99.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > For evaluation, we selected eight general-purpose benchmarks to assess context awareness, including MMLU (5-shot) (Hendrycks et al., 2020), MMLU-PRO (5-shot) (Wang et al., 2024), GPQA (0-shot) (Rein et al., 2023), BBH (3-shot) (Srivastava et al., 2023), WinoGrande (5-shot) (Sakaguchi et al., 2019), GSM8k (8-shot) (Cobbe et al., 2021), MATH (4-shot) (Lightman et al., 2023), and DROP (3-shot) (Dua et al., 2019). (Section 6)
  - [HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)
- **Iterative refinement** (behaviors tasks) — *measured_by*
  > In solution optimization, we assess performance on the Google-proof Question Answering (GPQA) benchmark (Rein et al., 2023)... (Section 4)
  - [Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > For logical reasoning, we evaluate the PrOntoQA (Saparov & He, 2022) dataset for logical deduction in a 5-shot setting and the GPQA (Rein et al., 2023) dataset for graduate-level multiple-choice questions in a 0-shot setting (Section 4).
  - [Policy Guided Tree Search for Enhanced LLM Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bv/li25bv.pdf)
- **Task generalization** (constructs) — *measured_by*
  > "To explore the efficacy of our general purpose ARCHON architectures, we evaluate them on three previously unseen tasks: GPQA (Rein et al., 2024), MMLU (Hendrycks et al., 2021), and MMLU Pro (Wang et al., 2024b)."
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **Retrieval-augmented generation** (behaviors tasks) — *measured_by*
  > To assess LIMRANK’s practical utility, we further deploy and evaluate it in two real-world-inspired tasks: ... (2) Retrieval-Augmented Generation (RAG) on the GPQA benchmark (Rein et al., 2024). (Section 1)
  - [LimRank: Less is More for Reasoning-Intensive Information Reranking](https://aclanthology.org/2025.emnlp-main.1041.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > we assess model capabilities in... commonsense reasoning on Hellaswag (Zellers et al., 2019) and GPQA (Rein et al., 2024). (Section 4.1)
  - [Middo: Model-Informed Dynamic Data Optimization for Enhanced LLM Fine-Tuning via Closed-Loop Learning](https://aclanthology.org/2025.emnlp-main.350.pdf)
