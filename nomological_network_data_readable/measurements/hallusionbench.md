# HallusionBench
**Type:** Measurement  
**Referenced in:** 26 papers  
**Also known as:** HallBench  

## State of the Field

**What it is.** Across papers, the dominant framing is a benchmark, sometimes written as HallBench or HallB, for assessing hallucination in multimodal or vision-language models. Definitions also describe it as a diagnostic suite for entangled language hallucination and visual illusion, a tool for distinguishing VLM reasoning error modes, and a benchmark for image-context reasoning; some descriptions specify 346 images paired with 1129 questions, while others emphasize question type, difficulty level, or real-world and multi-discipline contexts. A smaller line of work describes HallBench more broadly as evaluating multimodal understanding with an emphasis on hallucination-related performance.

**What it is claimed to measure.** Papers link HallusionBench to 4 behavioral indicators and 2 constructs. The prevailing use is to measure hallucination, with relationship evidence describing evaluation of language or knowledge hallucination together with visual illusion; other papers use it to measure hallucination detection, visual hallucination, and visual question answering. Papers also report it as measuring hallucination resistance and visual reasoning, so its reported measurement claims extend beyond a single target even though hallucination-related uses are the most common.

**Space of uses.** No measurement instrument is linked to it. In practice, papers usually place it inside broader evaluation suites, for example alongside POPE, CHAIR, MMHal-Bench, GAVIE, and MMMU, and they describe those suites as widely used, representative, or challenging multimodal benchmarks. This positions HallusionBench as one component of multi-benchmark evaluations, including both hallucination-focused checks and broader multimodal testing.

## Sources

**[Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)**
> HallusionBench is a benchmark for assessing hallucination in multimodal models.

**[ChatVLA: Unified Multimodal Understanding and Robot Control with Vision-Language-Action Model](https://aclanthology.org/2025.emnlp-main.273.pdf) (as "HallBench")**
> HallBench, a benchmark used to evaluate multimodal understanding with an emphasis on hallucination-related performance.

## Relationships

### → HallusionBench
- **Hallucination** (behaviors tasks) — *measured_by*
  > HallusionBench (Guan et al., 2024) evaluates visual illusions and knowledge hallucinations, featuring 346 images and 1129 questions. (Sec. 5.1)
  - [CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf)
- **Hallucination resistance** (constructs) — *measured_by*
  > HallusionBench focuses on diagnosing both the visual illusion and knowledge hallucination of MLLMs.
  - [EMMA: Empowering Multi-modal Mamba with Structural and Hierarchical Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/3760dbb5835bf0b771c3f83cb27ef2c0-Paper-Conference.pdf)
- **Hallucination detection** (behaviors tasks) — *measured_by*
  > To evaluate the visual perception capabilities of RePer, we conducted assessments across five widely-used benchmarks, covering a range of tasks: ... hallucination detection (HallusionBench (Guan et al., 2024), MMHal-Bench (Sun et al., 2023b), GAVIE (Liu et al., 2023a)) (Section 4.2)
  - [Perception in Reflection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25r/wei25r.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > Additionally, we evaluate performance on specific-domain VQA tasks, which include ChartQA (Masry et al., 2022), LLaVABench (Liu et al., 2024c), and HallusionBench (Guan et al., 2023). (Section 4.1)
  - [Towards Rationale-Answer Alignment of LVLMs via Self-Rationale Calibration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25am/wu25am.pdf)
- **Visual hallucination** (behaviors tasks) — *measured_by*
  > Furthermore, we use HallBench (Guan et al., 2024) to quantify the extent of visual hallucinations in VLMs or VRMs. (Section 4.1)
  - [Look Again, Think Slowly: Enhancing Visual Reflection in Vision-Language Models](https://aclanthology.org/2025.emnlp-main.470.pdf)
