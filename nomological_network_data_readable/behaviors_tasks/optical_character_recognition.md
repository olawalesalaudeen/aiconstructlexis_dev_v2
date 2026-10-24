# Optical character recognition
**Type:** Behavior  
**Referenced in:** 45 papers  
**Also known as:** Text recognition, Scene text recognition, Element OCR, Heading OCR, OCR, Handwritten letter recognition, Reading text from images, Chart OCR, Handwritten text recognition, Printed text recognition, Text extraction from images, Text transcription, Document parsing, Text reading from images, OCR token recognition  

## State of the Field

**Space of definitions.** Across papers, the dominant framing is reading, identifying, extracting, and transcribing text that appears in visual inputs, most often images or documents, but also screenshots and video frames. Most definitions treat success as outputting the text itself, sometimes for the whole visual input and sometimes for a specified region, UI element, headline, or small embedded token; some papers further frame the extracted text as something used to answer questions or perform another task. A narrower chart-oriented usage limits the behavior to extracting visible text without semantic structuring, while document-focused work broadens it to dense layouts, PDFs, and historical handwritten or printed materials.

**Variants.** Papers use several names and subtask labels for this behavior, with OCR and text recognition the most common broad terms. Studied variants include scene text recognition, webpage Element OCR and Heading OCR, chart OCR, OCR in video frames, text extraction from slide frames, and document parsing; some work treats scene text recognition as an out-of-domain task. Other variants focus on handwritten letter recognition, handwritten and printed historical text recognition, text reading in non-English and diverse scripts, and OCR token recognition for small or embedded text.

**Space of elicitation and scores.** Papers link this behavior to 10 measurement instruments, all through measured_by relationships. The most frequently linked are TextVQA, DocVQA, OCRBench, ST-VQA, and ChartQA, with 5 other instruments also used. These are mostly benchmark datasets or evaluation suites described as OCR-related, document understanding, chart understanding, or text-understanding evaluations, often requiring answers through textual cues on images; video-focused work also measures it through question categories in a video benchmark.

**What it is taken as evidence of.** Papers link it to 3 constructs, GUI understanding, multimodal reasoning, and visual perception, but they do not converge on a single evidential role for it. Only a smaller line of work uses OCR in a measured_by link for multimodal reasoning. Other papers instead claim causal relationships from OCR to GUI understanding and from visual perception to OCR.

## Sources

**[Visual CoT: Advancing Multi-Modal Language Models with a Comprehensive Dataset and Benchmark for Chain-of-Thought Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0ff38d72a2e0aa6dbe42de83a17b2223-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The task of identifying and extracting text from images or documents.

**[WildVision: Evaluating Vision-Language Models in the Wild with Human Preferences](https://proceedings.neurips.cc/paper_files/paper/2024/file/563991b5c8b45fe75bea42db738223b2-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Text recognition")**
> Reading and transcribing text that appears in images or screenshots.

**[ControlMLLM: Training-Free Visual Prompt Learning for Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/4fd96b997454b5b02698595df70fccaf-Paper-Conference.pdf) (as "Scene text recognition")**
> Recognizing and reading text within an image region, often treated as an out-of-domain task for referring models.

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf) (as "Element OCR")**
> Extracting the text content from a specific UI element highlighted by a bounding box on a webpage screenshot.

**[Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf) (as "Heading OCR")**
> Identifying and extracting the textual content of headlines or titles from a webpage.

**[Frame-Voyager: Learning to Query Frames for Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d18d208fa9c333483e5724ade7beff0f-Paper-Conference.pdf) (as "OCR")**
> The task of performing Optical Character Recognition to read and interpret text that appears within video frames.

**[SCISSOR: Mitigating Semantic Bias through Cluster-Aware Siamese Networks for Robust Classification](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25w/yang25w.pdf) (as "Handwritten letter recognition")**
> The observable task of identifying and classifying characters from images of handwritten letters.

**[VisualWebInstruct: Scaling up Multimodal Instruction Data through Web Search](https://aclanthology.org/2025.emnlp-main.72.pdf) (as "Reading text from images")**
> The observable behavior of extracting and understanding textual content embedded within an image to perform a task.

**[ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering](https://aclanthology.org/2025.emnlp-main.226.pdf) (as "Chart OCR")**
> Extracting visible text elements from a chart without semantic structuring.

**[CHURRO: Making History Readable with an Open-Weight Large Vision-Language Model for High-Accuracy, Low-Cost Historical Text Recognition](https://aclanthology.org/2025.emnlp-main.1763.pdf) (as "Handwritten text recognition")**
> Transcribing text from images of handwritten historical documents, accounting for diverse handwriting styles, abbreviations, and degradation.

**[CHURRO: Making History Readable with an Open-Weight Large Vision-Language Model for High-Accuracy, Low-Cost Historical Text Recognition](https://aclanthology.org/2025.emnlp-main.1763.pdf) (as "Printed text recognition")**
> Transcribing text from images of printed historical documents, handling archaic fonts, layout variations, and orthographic inconsistencies.

**[Do Slides Help? Multi-modal Context for Automatic Transcription of Conference Talks](https://aclanthology.org/2025.emnlp-main.814.pdf) (as "Text extraction from images")**
> The process of identifying and converting textual content from image frames of presentation slides into machine-readable text, using OCR or vision-language models.

**[What matters when building vision-language models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf) (as "Text transcription")**
> The task of accurately extracting and transcribing textual content from an image or document.

**[Streamline Without Sacrifice - Squeeze out Computation Redundancy in LMM](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wu25s/wu25s.pdf) (as "Document parsing")**
> The task of extracting structured information or transcribing content from document images, which often contain dense text and layouts.

**[Centurio: On Drivers of Multilingual Ability of Large Vision-Language Model](https://aclanthology.org/2025.acl-long.143.pdf) (as "Text reading from images")**
> Recognizing and transcribing textual content visible within an image, especially in non-English languages and diverse scripts.

**[Large Continual Instruction Assistant](https://raw.githubusercontent.com/mlresearch/v267/main/assets/qiao25e/qiao25e.pdf) (as "OCR token recognition")**
> Identifying and transcribing text from images, particularly small or embedded text, based on visual input and natural language queries.

## Relationships

### Optical character recognition →
- **TextVQA** (measurements) — *measured_by*
  > our strategy can effectively alleviate these issues, bringing substantial improvements on different benchmarks, especially in TextVQA with rich OCR information. (Section 4.3)
  - [DenseFusion-1M: Merging Vision Experts for Comprehensive Multimodal Perception](https://proceedings.neurips.cc/paper_files/paper/2024/file/20ffc2b42c7de4a1960cfdadf305bbe2-Paper-Datasets_and_Benchmarks_Track.pdf)
- **DocVQA** (measurements) — *measured_by*
  > OCR-Related Tasks. DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), TextVQA (Singh et al., 2019), InfoVQA (Mathew et al., 2022), VisualMRC (Tanaka et al., 2021), OCRBench (Liu et al., 2023c).
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **OCRBench** (measurements) — *measured_by*
  > OCR-Related Tasks. DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), TextVQA (Singh et al., 2019), InfoVQA (Mathew et al., 2022), VisualMRC (Tanaka et al., 2021), OCRBench (Liu et al., 2023c).
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **ST-VQA** (measurements) — *measured_by*
  > TextVQA and ST-VQA are two texts understanding benchmarks requiring models to answer questions through textual cues on images. (Section 5.1.1)
  - [CogCoM: A Visual Language Model with Chain-of-Manipulations Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1dcee1cd6890ab7fcdf173ec10526da9-Paper-Conference.pdf)
- **InfoVQA** (measurements) — *measured_by*
  > OCR-Related Tasks. DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), TextVQA (Singh et al., 2019), InfoVQA (Mathew et al., 2022), VisualMRC (Tanaka et al., 2021), OCRBench (Liu et al., 2023c).
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **VisualMRC** (measurements) — *measured_by*
  > OCR-Related Tasks. DocVQA (Mathew et al., 2021), ChartQA (Masry et al., 2022), TextVQA (Singh et al., 2019), InfoVQA (Mathew et al., 2022), VisualMRC (Tanaka et al., 2021), OCRBench (Liu et al., 2023c).
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **GUI understanding** (constructs) — *causes*
  > OCR samples benefit most in GUI understanding.
  - [Harnessing Webpage UIs for Text-Rich Visual Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/2da53cd1abdae59150e35f4693834f32-Paper-Conference.pdf)
- **ChartQA** (measurements) — *measured_by*
  > ChartQA (Masry et al., 2022), OCRVQA (Mishra et al., 2019), TextVQA (Singh et al., 2019) and DocVQA (Mathew et al., 2021) to examine their ability to recognize optical character (Section 5.1)
  - [Ranked from Within: Ranking Large Multimodal Models Without Labels](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tu25a/tu25a.pdf)
- **OCR-VQA** (measurements) — *measured_by*
  > ChartQA (Masry et al., 2022), OCRVQA (Mishra et al., 2019), TextVQA (Singh et al., 2019) and DocVQA (Mathew et al., 2021) to examine their ability to recognize optical character (Section 5.1)
  - [Ranked from Within: Ranking Large Multimodal Models Without Labels](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tu25a/tu25a.pdf)

### → Optical character recognition
- **Visual perception** (constructs) — *causes*
  > Recent work indicates that enhanced visual perception significantly reduces hallucinations and improves performance on resolution-sensitive tasks, such as optical character recognition and document analysis. (ABSTRACT)
  - [Eagle: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/e78457d4a04b8565f1fe5077df13cddb-Paper-Conference.pdf)

### Associated with
- **Multimodal reasoning** (constructs)
  > We also show some multi-modal reasoning examples in Figure 6. Our approach exhibits better object counting, OCR, and commence reasoning performance. (Section 4.2)
  - [LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf)
