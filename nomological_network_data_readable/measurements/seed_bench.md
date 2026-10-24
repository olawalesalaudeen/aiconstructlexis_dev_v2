# SEED-Bench
**Type:** Measurement  
**Referenced in:** 60 papers  
**Also known as:** SEEDBench, SEEDbench, SeedBench, SEED  

## State of the Field

**What it is.** Across papers, SEED-Bench is most commonly treated as a multimodal or vision-language benchmark for evaluating multimodal comprehension, generative comprehension, or broader vision-language performance. Many descriptions portray it as a multiple-choice benchmark, and some are more specific: papers describe 19K human-annotated questions spanning 12 evaluation dimensions across image and video modalities, while another paper describes a visual question-answering benchmark with 9 dimensions and MCQ accuracy; some authors also describe instance interaction, text understanding, spatial relations, common-sense questions, or video comprehension tasks such as action prediction, action recognition, and procedure understanding. A few papers refer to subsets or slices such as SEED, SEED-Image, and all/image/video variants.

**What it is claimed to measure.** Papers link SEED-Bench to 5 constructs and 5 behavioral indicators. The dominant behavioral use is to measure visual question answering, and the most common construct-level claim is that it measures visual understanding. Smaller lines of work use it to measure multimodal understanding, multimodal perception, and visual instruction following, and papers also report it as evaluating several other targets rather than a single construct alone.

**Space of uses.** Most papers use SEED-Bench as one component of a broader evaluation suite, commonly alongside MMBench, MME, MM-Vet, GQA, and ScienceQA. Several papers position it within image-level, vision-understanding, or general multimodal benchmark collections, and a few use specific subsets such as the image part or separate all/image/video evaluations. There are also narrower uses: one paper draws images from SeedBench for ConBench, and another says it curates data from SEED-Bench together with ScienceQA and MME.

**Concerns raised.** Only a small line of work raises an explicit concern around it: one paper includes SEEDBench in experiments that "reduce data contamination and expose performance limitations of LVLMs."

## Sources

**[Grounding Multimodal Large Language Models to the World](https://proceedings.iclr.cc/paper_files/paper/2024/file/e112a4671e8779aa9f640a0e3f81bd26-Paper-Conference.pdf)**
> A benchmark used in the paper to evaluate multimodal comprehension performance.

**[Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping](https://proceedings.iclr.cc/paper_files/paper/2025/file/36d9468ebdb76b9b229fbd343fff84d5-Paper-Conference.pdf) (as "SEEDBench")**
> An evaluation benchmark for Large Vision-Language Models that assesses a broad spectrum of cognitive and comprehension tasks, including instance interaction, text understanding, and spatial relations, through multiple-choice questions.

**[Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf) (as "SEEDbench")**
> A comprehensive vision-language benchmark used to evaluate model performance.

**[CoreMatching: A Co-adaptive Sparse Inference Framework with Token and Neuron Pruning for Comprehensive Acceleration of Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25eb/wang25eb.pdf) (as "SEED")**
> SEED-Bench (SEED) is a benchmark for evaluating multimodal models on their ability to comprehend complex visual scenes.

**[Unveiling the Tapestry of Consistency in Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f094ba0f5ce1720466342f78031bdb-Paper-Conference.pdf) (as "SeedBench")**
> A benchmark for multimodal large language models featuring comprehensive multiple-choice questions, used as a source of images for ConBench.

## Relationships

### → SEED-Bench
- **Visual question answering** (behaviors tasks) — *measured_by*
  > SEED-Bench [43] Multi-choice VQA on a diverse set of topics (Table A2)
  - [Accelerating Pre-training of Multimodal LLMs via Chain-of-Sight](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a54a80ffc2834689ffdd0920202018e-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *measured_by*
  > For examining visual understanding ability, we evaluate our model on the widely adopted zero-shot image-based visual-language benchmarks including VQAv2 (Goyal et al., 2017), GQA (Hudson & Manning, 2019), TextVQA (Singh et al., 2019), POPE (Li et al., 2023d), MME (Fu et al., 2024), SEED (Li et al., 2023a), MM-Vet (Yu et al., 2023b) (Section 4.1)
  - [VILA-U: a Unified Foundation Model Integrating Visual Understanding and Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/e9e140df6de01afb672cb859d203c307-Paper-Conference.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > we adopt these captions during the pre-training stage and follow the setup of LLaVA-1.5 [37] on various ... multi-modality understanding benchmarks for evaluation, such as ... SEED [30]... (Section 4.1)
  - [DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Visual instruction following** (behaviors tasks) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **Visual perception** (constructs) — *measured_by*
  > We further evaluate our trained model over six benchmarks that examines LVLMs general perception capability, including SEED-Bench [36]... (Appendix D.1)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > “SEED-Bench [36] consists of 19k multiple choice questions with human annotations”
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > Reasoning is benchmarked using GQA [15], MathVista [29], Mementos [43], SEED-Bench [22], and RealWorldQA [13] in VHELM. (Section 3.1)
  - [VHELM: A Holistic Evaluation of Vision Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fe2fc7dc60b55ccd8886220b40fb1f74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multimodal perception** (constructs) — *measured_by*
  > “Perception: Following (Tong et al., 2024a), we conduct experiments on 4 types of perception task (i.e., general, knowledge, ocr, and vision-centric) across 16 benchmarks: MME (Fu et al., 2023), MMBench (Liu et al., 2025), SEED (Li et al., 2024), GQA (Hudson & Manning, 2019), ScienceQA (Lu et al., 2022), MMMU (Yue et al., 2024), MathVista (Lu et al., 2024), AI2D (Kembhavi et al., 2016), ChartQA (Masry et al., 2022), OCRBench (Liu et al., 2024), TextVQA (Singh et al., 2019), DocVQA (Mathew et al., 2021), MMVP (Tong et al., 2024b), RealworldQA (xAI, 2024), and CV-Bench (Tong et al., 2024a).”
  - [MODA: MOdular Duplex Attention for Multimodal Perception, Cognition, and Emotion Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cg/zhang25cg.pdf)
