# Object hallucination
**Type:** Behavior  
**Referenced in:** 43 papers  
**Also known as:** Hallucinated object generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats object hallucination as outputs that mention or describe objects absent from the visual input, usually an image and in one definition a video frame. Several papers phrase this more broadly as responses "not factually aligned with image inputs," but the recurring concrete criterion is an incorrect object claim, whether in a free-form description or an affirmative answer such as "Yes, there is a white chair in the image." A smaller line of work also counts neglecting visible objects or "omitting essential features" as part of the behavior.

**Variants.** Most studies examine the behavior in image descriptions and captioning, while another common setting is yes/no object-presence questioning, including work that says models "hallucinate in response to yes/no questions." POPE-based papers further divide this probing into Popular, Random, and Adversarial balanced yes/no VQA, and one definition explicitly extends the setting from images to video frames. Some evaluations operationalize hallucination with subtasks such as Existence, Count, Position, and Color, or with object, attribute, and relation hallucinations, and one paper uses the alternate name "hallucinated object generation."

**Space of elicitation and scores.** Papers measure object hallucination with 11 instruments. The most common are POPE, CHAIR, AMBER, MME, and MS-COCO: POPE is repeatedly described as balanced yes/no VQA or binary classification about whether a named object is present, while CHAIR scores caption outputs by checking whether mentioned objects appear in ground-truth labels or objects. AMBER evaluates generative and discriminative tasks, MME uses perception subtasks such as Existence, Count, Position, and Color, and MS-COCO is used in caption-oriented evaluation; other papers also use judge-based and human annotation setups.

**What it is taken as evidence of.** Papers do not converge on a single construct that this behavior reflects. The most recurrent construct link is a claimed causal relationship from multimodal alignment to object hallucination, with papers saying inferior alignment or insufficient interaction between visual and instruction tokens leads to object hallucinations. Elsewhere, object hallucination is reported to correlate with representational stability, and separate papers relate it to faithfulness and visual perception.

## Sources

**[VideoLLM-MoD: Efficient Video-Language Streaming with Mixture-of-Depths Vision Computation](https://proceedings.neurips.cc/paper_files/paper/2024/file/c6a79e139ec4f371701ea8cc9e06018e-Paper-Conference.pdf)**
> An observable failure mode where the model generates text that refers to objects not present in the corresponding image or video frame.

**[Mitigating Object Hallucination in Large Vision-Language Models via Image-Grounded Guidance](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25j/zhao25j.pdf) (as "Hallucinated object generation")**
> The observable output of referring to objects in an image that are not actually present, as evidenced by incorrect affirmative answers or false descriptions.

## Relationships

### Object hallucination →
- **POPE** (measurements) — *measured_by*
  > POPE (Li et al., 2023b) is used to evaluate the level of object hallucinations in MLLMs, which consists of three versions of balanced yes/no VQA tasks (i.e., Popular/Random/Adversarial) considering objects in the given image. (Section 3)
  - [Tuning LayerNorm in Attention: Towards Efficient Multi-Modal LLM Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/7cc16e8635e6f27c295355bd214ef8d8-Paper-Conference.pdf)
- **CHAIR** (measurements) — *measured_by*
  > Caption Hallucination Assessment with Image Relevance (CHAIR) (Rohrbach et al., 2018) is a widely-used metric for evaluating object hallucination in image captioning tasks.
  - [Analyzing and Mitigating Object Hallucination in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc625e831361cfcc82cb74224fdc66cb-Paper-Conference.pdf)
- **MS-COCO** (measurements) — *measured_by*
  > Object hallucination. CIDEr (↑) for captioning and CHAIRs (↓) for hallucination on COCO dataset. (Figure 2a)
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **MME** (measurements) — *measured_by*
  > The MME hallucination subset extends scope beyond object hallucination. Following [34], we evaluation 4 perception sub-tasks that examines LVLMs on object-level and attribute-level hallucinations... (Sec. 5.4)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **AMBER** (measurements) — *measured_by*
  > To evaluate performance on both generative and discriminative tasks, we use AMBER (Wang et al., 2023b), which measures hallucination using several metrics. For generative tasks, AMBER assesses the frequency of hallucinated objects in image descriptions... (Section 4.1)
  - [Mitigating Object Hallucination in MLLMs via Data-augmented Phrase-level Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/b73228d026ef49bfa49f95b7e330513e-Paper-Conference.pdf)
- **Object HalBench** (measurements) — *measured_by*
  > To ensure that oDPO effectively mitigates object hallucinations in LVLMs, we conduct evaluations on four widely used object hallucination benchmarks: Object HalBench (Rohrbach et al., 2018), MME-Hall (Fu et al., 2023), AMBER (Wang et al., 2023a) and MMHalBench (Sun et al., 2024). (Section 4.2)
  - [Evaluating and Mitigating Object Hallucination in Large Vision-Language Models: Can They Still See Removed Objects?](https://aclanthology.org/2025.naacl-long.349.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > "we evaluate LURE on six open-source LVLMs and found it outperforms the previous best approach in both general object hallucination evaluation metrics, GPT, and human evaluations" (Abstract); "In addition to human evaluation, inspired from (Zheng et al., 2023), we also prompt GPT-3.5 to compare different descriptions. In this GPT evaluation" (Section 4.1)
  - [Analyzing and Mitigating Object Hallucination in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc625e831361cfcc82cb74224fdc66cb-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > In this human evaluation, participants are assigned the task of annotating hallucinatory objects and we rank different methods based on human feedback.
  - [Analyzing and Mitigating Object Hallucination in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc625e831361cfcc82cb74224fdc66cb-Paper-Conference.pdf)
- **NoCaps** (measurements) — *measured_by*
  > To evaluate object hallucination in visual caption, we use images from the COCO validation and Nocaps (Agrawal et al., 2019) datasets (Section 5.1).
  - [Understanding and Mitigating Hallucination in Large Vision-Language Models via Modular Attribution and Intervention](https://proceedings.iclr.cc/paper_files/paper/2025/file/8001c3568152d134d821cd46d4d84768-Paper-Conference.pdf)
- **Representational stability** (constructs) — *correlates*
  > We comprehensively present and analyze the correlation between vision feature stability and model hallucinations in Section 3.
  - [Reducing Hallucinations in Large Vision-Language Models via Latent Space Steering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4008025c2182bfe16fcc8566ee14d64-Paper-Conference.pdf)
- **A-OKVQA** (measurements) — *measured_by*
  > we... examined object hallucination using the SEEM-annotated MSCOCO and A-OKVQA datasets from POPE. (Section 4)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **MMHal-Bench** (measurements) — *measured_by*
  > “We utilize MMHal-Bench (Sun et al., 2023), which evaluates hallucination across 12 object-topics, including object attributes, presence of adversarial objects, and spatial relations, among others.”
  - [Mitigating Object Hallucination in MLLMs via Data-augmented Phrase-level Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/b73228d026ef49bfa49f95b7e330513e-Paper-Conference.pdf)

### → Object hallucination
- **Multimodal alignment** (constructs) — *causes*
  > this design leads to long-term decay [61] in multimodal alignment... but induces insufficient interactions between visual tokens and instruction tokens, leading to inferior multimodal alignment and object hallucinations in the trained LVLMs (see our experiments in Sec. 3 for details). (Introduction)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > In the realm of MLLMs, “hallucination” typically refers to “object hallucination,” where the models generate plausible outputs containing objects that are either absent from or mismatched with the images (Section 2)
  - [Unleashing Region Understanding in Intermediate Layers for MLLM-based Referring Expression Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/da76884a4e003ad0de97804ec4578e5b-Paper-Conference.pdf)
- **Faithfulness** (constructs)
  > Such phenomenon challenges the faithfulness and reliability of LVLMs in practical use, impeding their deployments to real-world applications [14]. (Introduction)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Visual perception** (constructs)
  > With CCA, visual tokens can better interact with instruction tokens, thereby enhancing model’s perception capability and alleviating object hallucination. (Abstract)
  - [Mitigating Object Hallucination via Concentric Causal Attention](https://proceedings.neurips.cc/paper_files/paper/2024/file/a76ed4a8ef522c823d73925e7fff16d4-Paper-Conference.pdf)
- **Image captioning** (behaviors tasks)
  > “HALVA substantially reduces hallucination in image descriptions compared to the base variants.”
  - [Mitigating Object Hallucination in MLLMs via Data-augmented Phrase-level Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/b73228d026ef49bfa49f95b7e330513e-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks)
  > “we compare the performance of MLLMs on visual question-answering tasks using both object hallucination (AMBER) and general vision-language (TextVQA) benchmarks.”
  - [Mitigating Object Hallucination in MLLMs via Data-augmented Phrase-level Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/b73228d026ef49bfa49f95b7e330513e-Paper-Conference.pdf)
