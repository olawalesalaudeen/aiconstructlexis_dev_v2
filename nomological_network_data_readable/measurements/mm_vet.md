# MM-Vet
**Type:** Measurement  
**Referenced in:** 83 papers  
**Also known as:** MM-VET, MMVet  

## State of the Field

**What it is.** Across papers, the dominant framing treats MM-Vet as a multimodal evaluation benchmark for the integrated capabilities of large multimodal models, often described as covering visual reasoning and understanding across diverse scenarios. Several definitions make this concrete as an open-ended or free-form benchmark, sometimes described as an in-the-wild, zero-shot setting, and one paper states that it contains 217 challenging open-ended tasks requiring detailed perception, cross-modal reasoning, and world knowledge. Papers also describe it through recurring core capabilities, with recognition, OCR, knowledge, spatial awareness, language generation, and math repeatedly named, while some narrower descriptions cast it as a visual question answering benchmark or as an evaluation of visual conversations judged with GPT-4.

**What it is claimed to measure.** Papers use MM-Vet to measure a broad spread of outcomes rather than a single construct: it is linked to 9 constructs and 5 behavioral indicators. The prevailing use is for visual understanding, followed by multimodal understanding, reasoning, spatial understanding, and fine-grained visual understanding, while other papers also report it as measuring general ability, knowledge, visual reasoning, and zero-shot generalization. Among behavioral indicators, it is most often used for visual question answering, and it is also linked to visual dialogue, text generation, visual hallucination, and visual instruction following.

**Space of uses.** In use, papers usually place MM-Vet inside broader benchmark suites, commonly alongside MMBench, MME, MMMU, SEED-Bench, and POPE, with other combinations also reported. It is often positioned as a comprehensive or prominent benchmark for zero-shot or general multimodal evaluation, though some papers use it more specifically for VQA-style evaluation or as a check on visual conversation performance. Some papers describe evaluation by GPT-4 comparison of predicted and ground-truth answers, while others report averages over its named core capabilities.

## Sources

**[DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf)**
> Evaluation benchmark for multimodal models focusing on visual reasoning and understanding across diverse scenarios.

**[Feast Your Eyes:  Mixture-of-Resolution Adaptation for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d2781f7df8825bbde6cef55adfbcd283-Paper-Conference.pdf) (as "MM-VET")**
> A benchmark used to evaluate the multimodal perception and cognition abilities of MLLMs.

**[Dynamic Multimodal Evaluation with Flexible Complexity by Vision-Language Bootstrapping](https://proceedings.iclr.cc/paper_files/paper/2025/file/36d9468ebdb76b9b229fbd343fff84d5-Paper-Conference.pdf) (as "MMVet")**
> A multimodal benchmark used in the paper to evaluate LVLMs on visual question answering tasks.

## Relationships

### → MM-Vet
- **Visual understanding** (constructs) — *measured_by*
  > Comparison with SoTAs in Image Understanding. ... Dense Connector outperforms the LLaVA-1.5 Vicuna 13B [16] with substantial gains of 2.1%, 3.7%, and 5.5% on the GQA [58], MMB [64], and MM-Vet [65] benchmarks, respectively.
  - [Dense Connector for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/3a10c46572628d58cb44fb705f25cbbf-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks) — *measured_by*
  > MMVet [101] evaluates integrated capabilities in visual question answering. (Section 3.2)
  - [WildVision: Evaluating Vision-Language Models in the Wild with Human Preferences](https://proceedings.neurips.cc/paper_files/paper/2024/file/563991b5c8b45fe75bea42db738223b2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multimodal understanding** (constructs) — *measured_by*
  > Additionally, we conducted a zero-shot evaluation on the recently developed benchmarks of MMBench and MM-Vet to assess the model’s performance in complex multimodal tasks. (Section 4.1)
  - [DreamLLM: Synergistic Multimodal Comprehension and Creation](https://proceedings.iclr.cc/paper_files/paper/2024/file/1a7a22152cd21f0ca3c0f8139bb32905-Paper-Conference.pdf)
- **Visual dialogue** (behaviors tasks) — *measured_by*
  > MM-Vet evaluates a model’s capabilities in engaging in visual conversations. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **Spatial understanding** (constructs) — *measured_by*
  > Table 5: Multimodal reasoning ability on MM-Vet [92]. Rec denotes Recognition; Know denotes knowledge; Gen denotes Language generation; and Spat denotes Spatial awareness.
  - [LOVA3: Learning to Visual Question Answering, Asking and Assessment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0822540916cd716add52e1846a6e18d-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > To probe the visual understanding and reasoning ability of our LLaVA-1.5-LLaMA3-8B model, we opt for two comprehensive multi-modal evaluation benchmarks, MMMU (Yue et al., 2024) and MM-Vet (Yu et al., 2024).
  - [What If We Recaption Billions of Web Images with LLaMA-3?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ch/li25ch.pdf)
- **Visual instruction following** (behaviors tasks) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **Fine-grained visual understanding** (constructs) — *measured_by*
  > Tasks that require fine-grained visual understanding and deep reasoning across multiple areas of the image naturally demand a higher number of visual tokens for optimal performance. ... This trend is evident in tasks such as VQAv2, GQA, VizWiz, MMBench, LLaVA-Bench, and MM-Vet.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > we further evaluated the performance of our fine-tuned visually-grounded language model (VLM) on additional benchmarks to ensure its robustness across a variety of tasks. In particular, we tested the model on TextVQA [42], POPE [29], and MMVet [51]. (Appendix C.3)
  - [Why are Visually-Grounded Language Models Bad at Image Classification?](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c7024041be305c94d7311cfcc53d93e-Paper-Conference.pdf)
- **Knowledge** (constructs) — *measured_by*
  > Table 5: Multimodal reasoning ability on MM-Vet [92]. Rec denotes Recognition; Know denotes knowledge; Gen denotes Language generation; and Spat denotes Spatial awareness.
  - [LOVA3: Learning to Visual Question Answering, Asking and Assessment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0822540916cd716add52e1846a6e18d-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > Table 5: Multimodal reasoning ability on MM-Vet [92]. Rec denotes Recognition; Know denotes knowledge; Gen denotes Language generation; and Spat denotes Spatial awareness.
  - [LOVA3: Learning to Visual Question Answering, Asking and Assessment](https://proceedings.neurips.cc/paper_files/paper/2024/file/d0822540916cd716add52e1846a6e18d-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > Unseen tasks are datasets that were not involved in the recipe construction process. These tasks are used to evaluate the zero-shot generalizability of our method. Specifically, we employed the MM-Vet (Yu et al., 2024), MM-Bench (Zhang et al., 2023a), MM-Bench-Chinese (Zhang et al., 2023a), VizWiz (Gurari et al., 2018), and POPE (Li et al., 2023) datasets to assess this capability.
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > ...we evaluate the proposed Image-DPO algorithm across three VLM models... using several popular VLM benchmarks that focus on different aspects, including... general visual reasoning (MM-Vet (Yu et al., 2023c))... (Section 5.1)
  - [Probing Visual Language Priors in VLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25b/luo25b.pdf)
