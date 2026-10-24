# Counting
**Type:** Behavior  
**Referenced in:** 37 papers  
**Also known as:** Action count, Vertex count, Hyperedge count, Action counting, Repetition counting, Audio content counting, Atom counting, Ring counting, Entity counting  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage of counting is an observable requirement to return the correct number of target items or events. Most commonly this means stating how many objects or shapes are visible in an image, but papers also define success as counting how many times an action or sound occurs, how many times a listed item appears, or, in more algorithmic settings, outputting running counts at each position, mapping a number word to the cardinality of a set, or generating the consecutive integers from a start value to an end value. Some formulations make edge cases explicit, for example image questions with trick cases where the correct answer is zero.

**Variants.** Variants span images, multi-image sets, diagrams, audio clips, videos, hypergraphs, molecular strings, and sequences. Video work commonly uses labels such as action count, action counting, or repetition counting for the total number of times an action or scene occurs, while audio-focused work asks for the number of occurrences of a specified sound in audio or video. Other papers study entity counting in diagrams, vertex and hyperedge counts in hypergraphs, and atom or ring counting from molecular strings.

**Space of elicitation and scores.** Papers measure counting with 8 instruments. The instruments linked most often are BABILong, LLM-as-a-judge, MLVU, MuirBench, and TACT, plus 3 other instruments. These instruments treat counting as part of long-context reasoning tasks, judge-based comparison to human-annotated object counts, frame-retrieval or video question categories, multi-image object counting, and tasks described as requiring basic mathematical operations.

**What it is taken as evidence of.** Construct links are sparse and split across two different directions rather than a shared construct. Papers link counting to 2 constructs: one paper claims a causal relationship from Fine-grained perception to Counting, with evidence phrased as enhanced visual capabilities resulting in better performance on these tasks, and another claims a causal relationship from Counting to Length generalization, reporting near-perfect generalization to longer count sequences. Separately, one paper reports that Counting is related to Hallucination.

## Sources

**[Understanding the Limits of Vision Language Models Through the Lens of the Binding Problem](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdcc6d47c1627350014a3076112ab824-Paper-Conference.pdf)**
> Reporting the number of objects or shapes visible in an image.

**[Animal-Bench: Benchmarking Multimodal Video Models for Animal-centric Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/8fa604a81e5a236e2f38e917109571a3-Paper-Conference.pdf) (as "Action count")**
> Counting how many times an action occurs in a video.

**[Beyond Graphs: Can Large Language Models Comprehend Hypergraphs?](https://proceedings.iclr.cc/paper_files/paper/2025/file/690fc970014e4ecebc8068bbc03b35e6-Paper-Conference.pdf) (as "Vertex count")**
> The task of counting the total number of vertices in a given hypergraph.

**[Beyond Graphs: Can Large Language Models Comprehend Hypergraphs?](https://proceedings.iclr.cc/paper_files/paper/2025/file/690fc970014e4ecebc8068bbc03b35e6-Paper-Conference.pdf) (as "Hyperedge count")**
> The task of counting the total number of hyperedges in a given hypergraph.

**[METok: Multi-Stage Event-based Token Compression for Efficient Long Video Understanding](https://aclanthology.org/2025.emnlp-main.954.pdf) (as "Action counting")**
> Detecting and enumerating the number of times a specific action or scene occurs within a video sequence.

**[D-CoDe: Scaling Image-Pretrained VLMs to Video via Dynamic Compression and Question Decomposition](https://aclanthology.org/2025.emnlp-main.597.pdf) (as "Repetition counting")**
> The observable task of counting the number of times a specific action or event occurs within a video.

**[Audio-centric Video Understanding Benchmark without Text Shortcut](https://aclanthology.org/2025.emnlp-main.333.pdf) (as "Audio content counting")**
> Counting how many times a specified audio event occurs in a video.

**[Molecular String Representation Preferences in PretrainedLLMs: A Comparative Study in Zero- & Few-Shot Molecular Property Prediction](https://aclanthology.org/2025.emnlp-main.56.pdf) (as "Atom counting")**
> Extracting and reporting the number of each type of atom (e.g., carbon, chlorine) present in a given molecular string representation.

**[Improving Chemical Understanding of LLMs via SMILES Parsing](https://aclanthology.org/2025.emnlp-main.791.pdf) (as "Ring counting")**
> Identifying and counting the number of rings of a specific size (e.g., five- or six-membered) in a molecule from its SMILES string.

**[Do Vision-Language Models Really Understand Visual Language?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hou25c/hou25c.pdf) (as "Entity counting")**
> The observable task of counting the number of entities of a certain type within a diagram.

## Relationships

### Counting →
- **TACT** (measurements) — *measured_by*
  > TACT offers a diverse range of tasks, primarily focusing on two types of instructions–“Calculate” and “Count”: (Section 2.3)
  - [TACT: Advancing Complex Aggregative Reasoning with Information Extraction Tools](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d7025dc9bd4c8b6fb1eef80cc618008-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BABILong** (measurements) — *measured_by*
  > "BABILong includes a diverse set of 20 reasoning tasks, including fact chaining, simple induction, deduction, counting, and handling lists/sets"
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > To assess this dimension, we query GPT-4V about the number of target objects in the image and compare its response with the human-annotated answer. (Sec. 3.1.1)
  - [I2EBench: A Comprehensive Benchmark for Instruction-based Image Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/48fecef47b19fe501d27d338b6d52582-Paper-Conference.pdf)
- **MuirBench** (measurements) — *measured_by*
  > [COUNTING] aims to evaluate the ability of models to count the number of specific objects across multiple images. (Section 3.1)
  - [MuirBench: A Comprehensive Benchmark for Robust Multi-image Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/9cf6139382f98623d08cc595622f3fb1-Paper-Conference.pdf)
- **TOMATO** (measurements) — *measured_by*
  > TOMATO comprises 1,484 carefully curated, human-annotated multiple-choice questions spanning six distinct temporal reasoning tasks (action count, direction, rotation, shape & trend, velocity & frequency, and visual cues)... (Section 1)
  - [TOMATO: Assessing Visual Temporal Reasoning Capabilities in Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/16ba99f25a235f1100a4014d71d34ad8-Paper-Conference.pdf)
- **VNBench** (measurements) — *measured_by*
  > "VNBench contains three distinct tasks to address various aspects of video understanding, including a short-dependency task (retrieval) and two long-dependency tasks (ordering and counting)"
  - [Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)
- **MLVU** (measurements) — *measured_by*
  > "the results of each subtask in MLVU (Zhou et al., 2024) show significant performance improvements when using cross-modal queries, particularly for frame-retrieval tasks such as counting and needle detection."
  - [LongVU: Spatiotemporal Adaptive Compression for Long Video-Language Understanding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shen25j/shen25j.pdf)

### Associated with
- **Hallucination** (behaviors tasks)
  > Our benchmark encompasses six novel hallucination scenarios ... each covering ﬁve different tasks, i.e. object recognition, counting, attribute recognition, spatial reasoning, and action prediction.
  - [MMDT: Decoding the Trustworthiness and Safety of Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0bcfb525c8f8f07ae10a93d0b2a40e00-Paper-Conference.pdf)
- **Length generalization** (constructs)
  > We train a Transformer with learned positional embeddings on count sequences of lengths up to 50, with random a and b points in [0, 155]. This trained model then length-generalizes near perfectly when prompted to count sequences of length 100 (see Figure 1b).
  - [What Algorithms can Transformers Learn? A Study in Length Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/45ed1a72597594c097152ef9cc187762-Paper-Conference.pdf)
