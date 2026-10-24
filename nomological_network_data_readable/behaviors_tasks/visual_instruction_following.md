# Visual instruction following
**Type:** Behavior  
**Referenced in:** 5 papers  
**Also known as:** Image-conditioned instruction following  

## State of the Field

**Space of definitions.** Across the definitions, the prevailing usage treats this behavior as producing a textual response from a paired image and natural language prompt. One definition states it as generating text from “a combination of a visual image and a natural language instruction or question,” while another calls it “image-conditioned instruction following” and describes it as responding to instructions that require understanding and reasoning over an accompanying image. Examples shown in the snippets include answering “What place is this?” and deciding whether to go “left or right?” from image context.

**Variants.** Papers situate the behavior in multimodal and visual-language settings, and a smaller line of work describes visual instruction tuning in a multitask setup. One source evaluates it on Mixed Visual Instruction Tuning 665k across several datasets, and another relates it to VQA and region-level VQA within the same tuning process. The main naming variation is between “visual instruction following” and “image-conditioned instruction following.”

**Space of elicitation and scores.** Papers measure this behavior with 11 linked instruments. The prevailing operationalization uses multimodal benchmarks, and one paper explicitly groups several as “instruction-following-based LMM benchmarks.” The most frequently linked instruments are MMBench, POPE, GQA, LLaVA-Bench-in-the-Wild, and MM-Vet, with 6 other instruments also used.

**What it is taken as evidence of.** Papers do not link this behavior to any construct, so they do not use it as evidence of a named construct here. The only other relationship reported in papers says it is related to visual question answering, with one paper placing it alongside VQA and region-level VQA in multitask visual instruction tuning.

## Sources

**[SAN: Hypothesizing Long-Term Synaptic Development and Neural Engram Mechanism in Scalable Model’s Parameter-Efficient Fine-Tuning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dai25e/dai25e.pdf)**
> The observable task of generating a textual response based on a combination of a visual image and a natural language instruction or question.

**[LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf) (as "Image-conditioned instruction following")**
> Responding to natural language instructions that require understanding and reasoning over an accompanying image input.

## Relationships

### Visual instruction following →
- **LLaVA-Bench-in-the-Wild** (measurements) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **SEED-Bench** (measurements) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > ...as well as instruction-following-based LMM benchmarks including POPE [40], MME [17], MMBench [47], SEED-Bench [35], LLaVA-Wild [46], and MM-Vet [67]. (Section 4.1)
  - [CuMo: Scaling Multimodal LLM with Co-Upcycled Mixture-of-Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed1d3d4c64dc1b95332a8cde3f2a0bdf-Paper-Conference.pdf)

### Associated with
- **Visual question answering** (behaviors tasks)
  > "The visual instruction tuning is performed in a multitask setting, including VQA ... region-level VQA ..."
  - [MiLoRA: Harnessing Minor Singular Components for Parameter-Efficient LLM Finetuning](https://aclanthology.org/2025.naacl-long.248.pdf)
