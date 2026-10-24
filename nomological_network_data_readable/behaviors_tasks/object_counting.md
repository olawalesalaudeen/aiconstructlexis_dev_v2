# Object counting
**Type:** Behavior  
**Referenced in:** 21 papers  
**Also known as:** Object count  

## State of the Field

**Space of definitions.** Most papers treat object counting as a visual task in which a model determines how many instances of a specified object are present in an image, often in response to a natural-language query. Success is usually framed as returning the correct number for the queried category, as in prompts such as asking how many yellow blocks are in an image or simply to determine the number of instances present. A smaller line of work uses the same label for counting objects or entities mentioned in text prompts, and one paper extends it to counting how many times an object appears in a video.

**Variants.** Papers use several names for closely related versions, including Object counting, Object count, Count, Counting, and BBH Object Counting. The studied settings span 2D perception tasks, image questions over repeated visual elements or icons, natural-language image queries, text-only counting from described contexts, and video counting. Examples include counting animals listed in a prompt, counting yellow blocks in an image, and video questions such as how many antelope a leopard attacks, and one image study further restricts the setup to images with 1-4 instances.

**Space of elicitation and scores.** Papers link object counting to 5 measurement instruments. BIG-Bench Hard is used for Object Counting in prompt optimization, BIG-bench is related through an adapted task for object classification and counting, MME evaluates it through a Count subtask alongside Existence, Position, and Color, MME-RealWorld includes it among perception tasks, and Waste-Bench defines counting as tasks where the model counts specific items or categories within an image.

**What it is taken as evidence of.** Papers link object counting to 2 constructs, and the framing is not uniform. One paper links Multimodal reasoning to object counting with a measured_by relation, presenting better object counting as part of multimodal reasoning examples, while another links Object counting to Calibration with a measured_by relation by using Object Counting as one of the symbolic reasoning benchmarks in calibration evaluation.

## Sources

**[Cambrian-1: A Fully Open, Vision-Centric Exploration of Multimodal LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/9ee3a664ccfeabc0da16ac6f1f1cfe59-Paper-Conference.pdf)**
> Determining the number of instances of a specific object category present in an image.

**[Animal-Bench: Benchmarking Multimodal Video Models for Animal-centric Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8fa604a81e5a236e2f38e917109571a3-Paper-Conference.pdf) (as "Object count")**
> Counting how many instances of an object appear in a video.

## Relationships

### Object counting →
- **MME** (measurements) — *measured_by*
  > Following Yin et al. (2023), we evaluate hallucination using four subtasks: Existence, Count, Position, and Color, with performance measured by the combined metric of accuracy and accuracy+ (Section 4.1).
  - [Do You Keep an Eye on What I Ask? Mitigating Multimodal Hallucination via Attention-Guided Ensemble Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/637b275a6e65924719198188fc939632-Paper-Conference.pdf)
- **MME-RealWorld** (measurements) — *measured_by*
  > There are 3 perception tasks: object counting, color recognition, and spatial relationship understanding. (Section 2.2)
  - [MME-RealWorld: Could Your Multimodal LLM Challenge High-Resolution Real-World Scenarios that are Difficult for Humans?](https://proceedings.iclr.cc/paper_files/paper/2025/file/df29d63af05cb91d705cf06ba5945b9d-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > For prompt optimization, we use the Big Bench Hard dataset (Suzgun et al., 2022) for Object Counting... (Section 4)
  - [Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf)
- **Waste-Bench** (measurements) — *measured_by*
  > Counting: This category involves tasks where the model must count the number of specific items or categories within an image.
  - [Waste-Bench: A Comprehensive Benchmark for Evaluating VLLMs in Cluttered Environments](https://aclanthology.org/2025.emnlp-main.1578.pdf)

### Associated with
- **BIG-bench** (measurements)
  > Adapted from BIG-bench (Bench authors, 2023), this task tests object classification and counting. (Section 4.3)
  - [A Causal Lens for Evaluating Faithfulness Metrics](https://aclanthology.org/2025.emnlp-main.1496.pdf)
- **Multimodal reasoning** (constructs)
  > We also show some multi-modal reasoning examples in Figure 6. Our approach exhibits better object counting, OCR, and commence reasoning performance. (Section 4.2)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
